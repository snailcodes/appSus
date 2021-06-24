export default {
	template: `  
    <form v-on:keyup.enter="submit">
    <input class="input-keep" type="text" placeholder="Todo Title">
    <input class="input-keep" type="text" placeholder="Add Task">
    <input class="input-keep" type="text" placeholder="Add Task">
    
    <button v-on:keyup.enter="submit"> Save </button>
    </section>`,

	data() {
		return {
			info: { txt: null },
		};
	},
	methods: {
		submit() {
			// console.log('submitting txt');
			const newInfo = { ...this.info };
			this.$emit('submitting', newInfo, 'noteTodos');
			this.info.txt = '';
		},
	},
};
