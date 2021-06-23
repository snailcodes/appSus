export default {
	props: ['info'],
	template: `
    <section> 
	{{info.title}}
	<img :src=" info.url" >
</section>
        
    `,

	created() {
		console.log('sanity from imgTxt');
	},
};
