import { eventBus } from '../../services/event-bus-service.js';
import { utilService } from '../../services/util-service.js'

export default {
    props: ['parentEmail'],
    template: `
            <form @submit.prevent="composeEmail" class="email-compose">
                <div class="email-compose-header">
                    <span>New Email</span>
                </div>
                <div class="email-compose-from">
                    To
                    <input class="input-email" v-model="email.to" type="email" required>
                </div>
                <div class="email-compose-subject">
                    Subject
                    <input class="input-email" ref="subject" v-model="email.subject" type="text" maxlength="50">
                </div>
                <textarea v-model="email.body"></textarea>
                <button class="btn-email-compose">Send</button>
            </form>
    `,
    data() {
        return {
            email: {
                id: utilService.makeId(),
                to: '',
                subject: '',
                body: '',
                sentAt: null,
                isStarred: false,
                isSent: false,
                isRead: false
            }
        }
    },
    mounted() {
        this.$refs.subject.focus();
        console.log(this.parentEmail)
        if (this.parentEmail) {
            this.email.to = this.parentEmail.from;
            this.email.subject = `Re: ${this.parentEmail.subject}`;
        }
    },
    methods: {
        composeEmail() {
            if (!this.email.body) {
                const msg = {
                    txt: 'Please enter email message',
                    type: 'error'
                };
                eventBus.$emit('show-msg', msg);
                return
            }

            if (this.parentEmail) {
                if (!this.parentEmail.replies) this.parentEmail.replies = []
                this.email.sentAt = Date.now();
                this.email.isSent = true;
                this.parentEmail.replies.push(this.email);
                this.$emit('emailReplied', this.parentEmail)
            } else this.$emit('emailComposed', this.email)
        }
    },
    computed: {}
}