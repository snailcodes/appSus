export default {
	props: ['note'],
	template: `
    <section class="note">
		<img @click="onPin" class="pin" src="../../../../img/apps/keep/pin.png" >
		<p>
	 	{{note.info.txt}}  
		 </p>
	</section>
        
    `,
	methods: {
		onPin() {
			console.log('pinned');
			this.note.isPinned = true;
			eventBus.$emit('pinned', this.note);
		},
	},

	created() {
		// console.log('sanity from noteText');
	},
};
