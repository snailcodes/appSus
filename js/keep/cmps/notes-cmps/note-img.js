export default {
	props: ['note'],
	template: `
    <section class="note note-img">
		
		<p class="boldTxt">{{note.info.title}} </p>
		<img class="keep-img" :src="note.info.url" >
		
	</section>

    `,
	methods: {
		// onPin() {
		// 	console.log('pinned');
		// 	this.note.isPinned = true;
		// 	eventBus.$emit('pinned', this.note);
		// },
	},

	created() {},
};
