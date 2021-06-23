import { emailService } from '../services/email-service.js';
import { eventBus } from '../../services/event-bus-service.js';
import emailList from '../cmps/email-list.js';
import emailStatus from '../cmps/email-status.js';
import emailDetails from './email-details.js';
import emailFilter from '../cmps/email-filter.js';
import emailCompose from '../cmps/email-compose.js';

export default {
    template: `
        <section class="email-app">
            <email-list v-if="emails && emails.length>0" :emails="emailsToShow" @selected="showEmail"/>
            <div v-else class="email-empty-list">Yay! You have no emails...</div>
            <email-details :email="selectedEmail" @deleted="deleteEmail"/>
            <email-status :emails="emails"></email-status>
            <email-filter @filtered="setFilter"></email-filter>
            <div v-if="isComposingEmail" class="modal-container" @click.self="isComposingEmail = false">
                <email-compose class="modal-content" @emailComposed="composeEmail"/></email-compose>
            </div>
            <button @click="isComposingEmail = true" class="btn-email-compose">Compose a new email</button>
        </section>
    `,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: null,
            isComposingEmail: false
        };
    },
    created() {},
    mounted() {
        this.loadEmails()
            .then(() => {
                this.markRead(this.emails[0]);
                this.selectedEmail = this.emails[0]
            })
    },
    methods: {
        loadEmails() {
            return emailService.query()
                .then(emails => {
                    this.emails = emails;
                });
        },
        showEmail(emailId) {
            emailService.getById(emailId)
                .then(email => {
                    this.markRead(email);
                    this.selectedEmail = email;
                })
        },
        composeEmail(email) {
            emailService.save(email)
                .then(() => {
                    this.loadEmails();
                    const msg = {
                        txt: 'Email has been sent successfully',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                })
            this.isComposingEmail = false;
        },
        deleteEmail(emailId) {
            let prevEmail = emailService.getAdjcntEmails(emailId)
                .then(adjcntEmails => {
                    ({ prevEmail } = adjcntEmails);
                });
            emailService.remove(emailId)
                .then(emails => {
                    this.emails = emails;
                    this.selectedEmail = prevEmail;
                })
        },
        markRead(email) {
            email.isRead = true;
            emailService.save(email)
                .then(() => this.loadEmails())
        },
        setFilter(filterBy) {
            this.filterBy = {...filterBy }
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy ||
                (!this.filterBy.txt &&
                    ((!this.filterBy.isRead && !this.filterBy.isUnread) ||
                        (this.filterBy.isRead && this.filterBy.isUnread)))) return this.emails;

            if (this.filterBy.txt) {
                const filterStr = this.filterBy.txt.toLowerCase();
                return this.emails.filter(email => {
                    if (email.subject.toLowerCase().includes(filterStr) ||
                        email.body.toLowerCase().includes(filterStr)) {
                        if (this.filterBy.isRead) {
                            return email.isRead
                        } else if (this.filterBy.isUnread) {
                            return !email.isRead
                        } else {
                            return email
                        }
                    }
                })
            } else if (this.filterBy.isRead) {
                return this.emails.filter(email => {
                    return email.isRead
                })
            } else {
                return this.emails.filter(email => {
                    return !email.isRead
                })
            }
        }
    },
    components: {
        emailFilter,
        emailList,
        emailDetails,
        emailStatus,
        emailCompose
    }
}