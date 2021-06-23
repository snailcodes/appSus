export default {
	props: ['info'],
	template: `
    <section>{{info.txt}} </section>
        
    `,

	created() {
		console.log('sanity from noteText');
	},
};
