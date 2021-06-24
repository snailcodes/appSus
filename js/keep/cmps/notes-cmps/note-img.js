import { eventBus } from '../../../services/event-bus-service.js';

export default {
	props: ['note'],
	template: `
    <section class="note">
		<!-- <img  @click="onPin" class="pin" src="../../../../img/apps/keep/pin.png" >  -->
		{{note.info.title}}
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

	created() {
		console.log('sanity from imgTxt');
	},
};
