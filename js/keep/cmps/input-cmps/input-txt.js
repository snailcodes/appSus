export default {
	template: `  
	<form v-on:keyup.enter="submit" >
    <input  v-model="info.txt"  class="input-keep" type="text" placeholder="Write to add Note">
	</form>
    `,

	data() {
		return {
			info: { txt: null },
		};
	},

	methods: {
		submit() {
			// console.log('submitting txt');
			const newInfo = { ...this.info };
			this.$emit('submitting', newInfo, 'noteTxt');
			this.info.txt = '';
		},
	},
};
