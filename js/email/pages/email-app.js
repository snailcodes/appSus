import { emailService } from '../services/email-service.js';
import { eventBus } from '../../services/event-bus-service.js';
import emailList from '../cmps/email-list.js';
import emailNav from '../cmps/email-nav.js';
import emailDetails from './email-details.js';
import emailSearch from '../cmps/email-search.js';
import emailCompose from '../cmps/email-compose.js';

export default {
    template: `
        <section class="email-app">
            <email-nav @compose="isComposingEmail = true" :emails="emails"/>
            <email-list v-if="emailsToShow" :emails="emailsToShow" @searched="setSearch" @selected="showEmail" @starred="toggleStarred" @toggleread="toggleRead"/>
            <email-details :email="selectedEmail" @emailDeleted="deleteEmail" @emailReplied="loadEmails()" @replyDeleted="deleteReply"/>
            <div v-if="isComposingEmail" class="modal-container" @click.self="isComposingEmail = false">
                <email-compose class="modal-content" @emailComposed="composeEmail"/></email-compose>
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            searchBy: null,
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
        deleteReply(replyId) {
            emailService.getById(this.selectedEmail.id)
                .then(email => {
                    const idx = email.replies.findIndex(reply => {
                        return reply.id === replyId
                    })
                    email.replies.splice(idx, 1)
                    emailService.save(email)
                        .then(email => {
                            this.selectedEmail = email;
                        })
                    const msg = {
                        txt: 'Reply has been deleted successfully',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                })
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
                    const msg = {
                        txt: 'Email has been deleted successfully',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                })
        },
        markRead(email) {
            email.isRead = true;
            emailService.save(email)
                .then(() => this.loadEmails())
        },
        toggleRead(email) {
            email.isRead = !email.isRead;
            emailService.save(email)
                .then(() => this.loadEmails())
        },
        toggleStarred(email) {
            email.isStarred = !email.isStarred;
            emailService.save(email);
        },
        setSearch(searchBy) {
            this.searchBy = {...searchBy }
        }
    },
    computed: {
        emailsToShow() {
            if (!this.searchBy ||
                (!this.searchBy.txt &&
                    ((!this.searchBy.isRead && !this.searchBy.isUnread) ||
                        (this.searchBy.isRead && this.searchBy.isUnread)))) return this.emails;

            if (this.searchBy.txt) {
                const searchStr = this.searchBy.txt.toLowerCase();
                return this.emails.filter(email => {
                    if (email.subject.toLowerCase().includes(searchStr) ||
                        email.body.toLowerCase().includes(searchStr)) {
                        if (this.searchBy.isRead) {
                            return email.isRead
                        } else if (this.searchBy.isUnread) {
                            return !email.isRead
                        } else {
                            return email
                        }
                    }
                })
            } else if (this.searchBy.isRead) {
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
        emailNav,
        emailSearch,
        emailList,
        emailDetails,
        emailCompose
    }
}