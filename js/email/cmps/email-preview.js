import { i18nService } from "../../services/i18n-service.js";
import longText from '../../cmps/long-text.js';

export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <div class="email-preview-subject">Subject: {{email.subject}}</div>
            <div class="email-preview-body">{{email.body}}</div>
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