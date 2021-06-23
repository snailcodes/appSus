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

		deleteNote(note) {
			console.log('delete note', note);
			keepService.removeNote(note).then(() => {
				this.loadNotes();
			});
		},

		updateNote(note) {
			console.log('sanity update');
			console.log(note);
			keepService
				.updateNote(note)
				.then(() => console.log('updating note', note.id));
		},
	},

	computed: {},

	created() {
		console.log('sanity app');
		eventBus.$on('checked', this.updateNote);
		this.loadNotes();
	},

	destroyed() {
		eventBus.$off('checked');
	},
};
