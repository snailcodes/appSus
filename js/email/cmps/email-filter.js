export default {
    template: `
    <section class="email-filter">
        <form @submit.prevent="onFilter">
            <input v-model="filterBy.txt" @search="onFilter" type="search" placeholder="Enter text...">
            Read:<input v-model="filterBy.isRead" type="checkbox">
            Unread:<input v-model="filterBy.isUnread" type="checkbox">
            <button>Filter</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: null,
                isRead: false,
                isUnread: false
            }
        };
    },
    methods: {
        onFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};