import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.js';
// import emailFilter from '../cmps/email-filter.js';
// import emailDetails from './email-details.js';
// import emailAdd from '../cmps/email-add.js';
import waitLoader from '../../cmps/loader.js';

export default {
    template: `
        <section class="email-app">
            <!-- <email-filter @filtered="setFilter" @addEmail="onAddEmail"></email-filter> -->
            <email-list v-if="emails.length>0" :emails="emails"></email-list>
            <wait-loader v-else/>
            <!-- <div v-if="toggleAddEmail" class="modal-container" @click.self="toggleAddEmail = false">
                <email-add @addedEmail="loadEmails"/>
            </div> -->
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            toggleAddEmail: false
        };
    },
    created() {
        this.loadEmails()
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emails = emails;
                });
        },
        setFilter(filterBy) {
            this.filterBy = {...filterBy }
        },
        onAddEmail() {
            this.toggleAddEmail = true;
        }
    },
    computed: {
        emailsToShow() {

        }
    },
    components: {
        // emailFilter,
        emailList,
        // emailDetails,
        // emailAdd,
        waitLoader
    }
};