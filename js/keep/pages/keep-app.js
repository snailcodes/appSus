import { keepService } from '../services/keep-service.js';
import noteList from '../cmps/note-list.js';

export default {
	template: `
    <section v-if="notes.length" class="keepApp" >
        <note-list  :notes="notes" /> 
    
    </section>
   
    `,

	components: {
		noteList,
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
	},

	computed: {},

	created() {
		this.loadNotes();
	},
};
