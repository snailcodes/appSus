import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    template: `
    <ul class="emails-list">
        <li v-for="email in emails" :key="email.id">
            <email-preview :email="email" @click.native="select(email.id)"/>
        </li>
    </ul>
    `,
    methods: {
        select(emailId) {
            this.$router.push(`/email/${emailId}`)
        }
    },
    components: {
        emailPreview
    }
};