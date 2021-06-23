import { keepService } from '../services/keep-service.js';
import noteList from '../cmps/note-list.js';
import { eventBus } from '../../services/event-bus-service.js';

export default {
	template: `
    <section v-if="notes.length" class="keepApp" >
        <note-list @deleted="deleteNote" :notes="notes" /> 
    </section>
    `,

	components: {
		noteList,
		eventBus,
		keepService,
	},

	data() {
		return {
			notes: [],
		};
	},

	methods: {
		loadNotes() {
			keepService.query().then((notes) => {
				this.notes = notes;
				console.log(this.notes);
			});
		},

		deleteNote(val) {
			console.log('sanity app');
			keepService.removeNote(val).then(() => {
				console.log('deleting note', val);
				this.loadNotes();
			});
		},

		// updateNote(note){
		//     switch (note.type) {
		//         case txt
		//             keepService.updateTxtNote();
		//             break;

		//         default:
		//             break;
		//     }
		// }
	},

	computed: {},

	created() {
		console.log('sanity app');
		this.loadNotes();
		eventBus.$on('checked');
	},
};
