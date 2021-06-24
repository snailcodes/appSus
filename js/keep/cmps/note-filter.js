export default {
	template: `
    <section class="note-filter">
        <input v-model="filterBy.txt" @change="filter" type="text" placeholder="Search...">
    </section>`,
	data() {
		return {
			filterBy: {
				txt: '',
			},
		};
	},

	methods: {
		filter() {
			this.$emit('filtered', { ...this.filterBy });
		},
	},
};
