import { i18nService } from "../../services/i18n-service.js";
import longText from '../../cmps/long-text.js';

export default {
    props: ['email'],
    components: {
        longText
    },
    template: `
        <div class="email-preview">
            <long-text class="email-preview-subject" :txt="email.subject" :length="40"></long-text>
            <long-text class="email-preview-body" :txt="email.body" :length="30"></long-text>
            <div class="email-preview-send-date">{{showSentTime}}</div>
            <div class="email-preview-read-state" :class="showReadState">✉️</div>
        </div>
    `,
    methods: {},
    computed: {
        showSentTime() {
            return new Date(this.email.sentAt).toLocaleDateString('en-il');
        },
        showReadState() {
            return !this.email.isRead ? 'unread' : ''
        }
    }
};