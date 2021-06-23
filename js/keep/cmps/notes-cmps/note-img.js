export default {
	props: ['note'],
	template: `
    <section class="note">
	{{note.info.title}}
	<img :src="note.info.url" >
</section>

    `,

	created() {
		console.log('sanity from imgTxt');
	},
};
