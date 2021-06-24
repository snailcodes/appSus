export default {
    template: `
<<<<<<< HEAD
        <form @submit.prevent="onSearch" @input="onSearch" class="form-email-search">
=======
        <form @submit.prevent="onSearch" class="form-email-search">
>>>>>>> cf9193d4c9665871a4ea120e6515d1c6463f1466
            <img src="../../../../img/apps/email/search.svg"><input v-model="searchBy.txt" @search="onSearch" type="search" placeholder="Search..." class="input-email-search">
            <span class="tooltip">
                <input v-model="searchBy.isRead" type="checkbox" id="email-read-state" class="input-email-search">
                <label class="email-read-state" for="email-read-state"></label>
                <span class="email-read-state-tip">
                    Read Emails
                </span>
            </span>
            <span class="tooltip">
                <input v-model="searchBy.isUnread" type="checkbox" id="email-unread-state" class="input-email-search">
                <label class="email-unread-state" for="email-unread-state"></label>
                <span class="email-read-state-tip">
                    Unread Emails
                </span>
            </span>
            <button class="btn-email-search">Search</button>
        </form>
    `,
    data() {
        return {
            searchBy: {
                txt: null,
                isRead: false,
                isUnread: false
            }
        };
    },
    methods: {
        onSearch() {
            this.$emit('searched', this.searchBy);
        }
    }
};
