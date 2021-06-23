import { i18nService } from "../../services/i18n-service.js";

export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
        </div>
    `,
    computed: {}
};