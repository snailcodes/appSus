import { eventBus } from '../../../services/event-bus-service.js';

export default {
	props: ['note'],
	template: `
    <section class="note note-img">
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

	created() {},
};
