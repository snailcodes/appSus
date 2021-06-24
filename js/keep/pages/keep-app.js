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
			<component @submitting="renderNote" :is="inputType" :info="newInfo" :editedNote="editedNote" > </component>
            <button class="button-keep" @click="setType('noteImg')"> <img src="'/../../../img/apps/keep/image.png" alt="addImg"> </button>
            <button class="button-keep" @click="setType('noteTxt')"> <img src="/../../../img/apps/keep/text.png" alt="addTxt"> </button>
            <button class="button-keep" @click="setType('noteTodos')"> <img src="/../../../img/apps/keep/checkbox.png" alt="addChkBox"> </button>          
            <button class="button-keep" @click="setType('noteVideo')"> <img src="/../../../img/apps/keep/video.png" alt="addChkBox"> </button>          
            
        </label>
    </div>
    

		<!-- <div @edited="editNote"> test </div>   -->
		<!-- <div  @editedNote="editNote" ></div> -->

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
			isEdit: false,
			editedNote: {},
		};
	},

	methods: {
		renderNote(info, type) {
			if (!this.isEdit) {
				console.log('adding');
				keepService.addNote(type, info).then(() => this.loadNotes());
			} else {
				console.log('editing');
				this.editedNote.info = info;
				console.log(this.editedNote);
				this.isEdit = false;
				keepService.updateNote(this.editedNote).then(() => {
					this.loadNotes();
				});
			}
		},

		setType(type) {
			switch (type) {
				case 'noteImg':
					this.inputType = 'inputImg';
					break;
				case 'noteTxt':
					this.inputType = 'inputTxt';
					break;
				case 'noteTodos':
					this.inputType = 'inputTodos';
					break;
				case 'noteVideo':
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

		editNote(note) {
			console.log('got here to edit', note);
			this.setType(note.type);
			this.editedNote = { ...note };
			this.isEdit = true;
			console.log(this.inputType);
		},

		onUpdateNote(note) {
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

	// TODO FIGURE OUT WHY ONLY BUS WORKS ON EDITNOTE (DIRECT EMIT DID NOT WORK)
	created() {
		console.log('sanity app');
		eventBus.$on('checked', this.onUpdateNote);
		eventBus.$on('pinned', this.onUpdateNote);
		eventBus.$on('editedNote', this.editNote);
		this.loadNotes();
	},

	destroyed() {
		eventBus.$off('checked');
		eventBus.$off('pinned');
		eventBus.$off('editedNote');
	},
};
