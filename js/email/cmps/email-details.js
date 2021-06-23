import { eventBus } from '../../services/event-bus-service.js';
import { i18nService } from '../../services/i18n-service.js';

export default {
    props: ['email'],
    template: `
        <section v-if="isEmailSelected" class="email-details">
            <div class="email-subject">
                <span>{{email.subject}}</span>
                <span @click="onDeleteEmail" class="email-delete">🗑️</span>
            </div>
            <div class="email-body">{{email.body}}</div>
        </section>
        <section v-else class="email-details">
            <div class="email-body">No selected email</div>
        </section>
    `,
    data() {
        return {
            isEmailSelected: false
        }
    },
    created() {
        this.isEmailSelected = true;
    },
    methods: {
        closeDetails() {
            this.isEmailSelected = false;
        },
        onDeleteEmail() {
            this.$emit('deleted', this.email.id);
            this.closeDetails();
        }
    },
    computed: {},
    components: {}
}