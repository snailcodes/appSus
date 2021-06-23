export default {
	props: ['note'],
	template: `
    <section class="note">{{note.info.txt}} </section>
        
    `,

	created() {
		// console.log('sanity from noteText');
	},
};
