import { i18nService } from "../../services/i18n-service.js";

export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <div class="email-subject">Subject: {{email.subject}}</div>
            <div class="email-body">{{email.body}}</div>
        </div>
    `,
    computed: {}
};