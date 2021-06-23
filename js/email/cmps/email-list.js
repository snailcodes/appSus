import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
        <li v-for="email in emails" :key="email.id">
            <email-preview :email="email" @click.native="selectEmail(email.id)"/>
        </li>
    </ul>
    `,
    methods: {
        selectEmail(emailId) {
            this.$emit('selected', emailId);
        }
    },
    components: {
        emailPreview
    }
};