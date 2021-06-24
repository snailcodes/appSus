import { keepService } from '../services/keep-service.js';
import noteList from '../cmps/note-list.js';
import { eventBus } from '../../services/event-bus-service.js';
import inputImg from '../cmps/input-cmps/input-img.js';
import inputVideo from '../cmps/input-cmps/input-video.js';
import inputTxt from '../cmps/input-cmps/input-txt.js';
import inputTodos from '../cmps/input-cmps/input-todos.js';

export default {
	template: `
    <section v-if="notes.length" class="keepApp" >
	<div class="add-section">
		<!-- //BUG PHOTO WONT APPEAR ON GIT - CHECK -->
		<label>
			<component @submitting="addNote" :is="inputType" :info="newInfo" > </component>
            <!-- <label> <input class="input-keep"  type="text" @click="addNote" placeholder="Write to add Note"> -->
            <button class="button-keep" @click="setType('noteImg')"> <img src="'/../../../img/apps/keep/image.png" alt="addImg"> </button>
            <button class="button-keep" @click="setType('noteTxt')"> <img src="/../../../img/apps/keep/text.png" alt="addTxt"> </button>
            <button class="button-keep" @click="setType('noteTodos')"> <img src="/../../../img/apps/keep/checkbox.png" alt="addChkBox"> </button>          
            <button class="button-keep" @click="setType('noteVideo')"> <img src="/../../../img/apps/keep/video.png" alt="addChkBox"> </button>          
            
        </label>
    </div>
    

        <note-list @deleted="deleteNote" :notes="notes" /> 
    </section>
    `,

	components: {
		noteList,
		eventBus,
		keepService,
		inputImg,
		inputTxt,
		inputTodos,
		inputVideo,
	},

	data() {
		return {
			notes: [],
			inputType: 'inputTxt',
			newInfo: {},
		};
	},

	methods: {
		addNote(info, type) {
			console.log('adding');
			keepService.addNote(type, info).then(() => this.loadNotes());
		},

		setType(type) {
			console.log('sanity adding');
			switch (type) {
				case 'noteImg':
					console.log('img');
					this.inputType = 'inputImg';
					break;
				case 'noteTxt':
					console.log('txt');
					this.inputType = 'inputTxt';
					break;
				case 'noteTodos':
					console.log('todos');
					this.inputType = 'inputTodos';
					break;
				case 'noteVideo':
					console.log('video');
					this.inputType = 'inputVideo';
					break;

				default:
					break;
			}
		},
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
				.then(() => console.log('updating note', note.id))
				.then(() => {
					this.loadNotes();
				});
		},
	},

	computed: {},

	created() {
		console.log('sanity app');
		eventBus.$on('checked', this.updateNote);
		eventBus.$on('pinned', this.updateNote);
		this.loadNotes();
	},

	destroyed() {
		eventBus.$off('checked');
		eventBus.$off('pinned');
	},
};
