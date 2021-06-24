import { i18nService } from '../../services/i18n-service.js';
import { emailService } from '../services/email-service.js';

export default {
    props: ['email'],
    template: `
        <section v-if="email" class="email-details">
            <div class="email-subject">
                <span>{{email.subject}}</span>
                <span @click="onDeleteEmail" class="email-delete">
                    <img src="img/apps/email/delete.png">
                </span>
            </div>
            <div class="email-body">{{email.body}}</div>
        </section>
        <section v-else class="email-details">
            <div class="email-body no-content"><span>No selected email</span></div>
        </section>
    `,
    data() {
        return {
            paramEmail: null,
        }
    },
    created() {},
    mounted() {},
    methods: {
        onDeleteEmail() {
            this.$emit('deleted', this.email.id);
        }
    },
    watch: {
        '$route.params.emailId': {
            immediate: true,
            handler() {
                const { emailId } = this.$route.params;
                emailService.getById(emailId)
                    .then(email => this.paramEmail = email);
            }
        }
    },
    computed: {},
    components: {
        emailService
    }
}