import { eventBus } from '../../services/event-bus-service.js';

export default {
    template: `
        <section>
            <form @submit.prevent="composeEmail" class="email-compose">
                <div class="email-compose-from">
                    To
                    <input v-model="email.to" type="email">
                </div>
                <div class="email-compose-subject">
                    Subject
                    <input ref="subject" v-model="email.subject" type="text" maxlength="50">
                </div>
                <textarea v-model="email.body"></textarea>
                <button>Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            email: {
                to: '',
                subject: '',
                body: '',
                sentAt: null,
                isRead: false
            }
        }
    },
    mounted() {
        this.$refs.subject.focus();
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
            this.$emit('emailComposed', this.email)
        }
    }
}