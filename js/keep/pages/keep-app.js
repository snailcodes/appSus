import { keepService } from '../services/keep-service.js';
import noteList from '../cmps/note-list.js';
import { eventBus } from '../../services/event-bus-service.js';
import inputImg from '../cmps/input-cmps/input-img.js';
import inputVideo from '../cmps/input-cmps/input-video.js';
import inputTxt from '../cmps/input-cmps/input-txt.js';
import inputTodos from '../cmps/input-cmps/input-todos.js';
import noteFilter from '../cmps/note-filter.js';

export default {
	template: `
    <section v-if="notes.length" class="keepApp" >
		
		<section class="keepApp-header">
			<div class="header-control">
		<note-filter class="note-search-bar" @filtered="setFilter"    />
		<div class="add-section">
			<!-- //TODO: BUG PHOTO WONT APPEAR ON GIT - CHECK -->
			<label>
				<component @submitting="renderNote" :is="inputType" :info="newInfo" :editedNote="editedNote" > </component>
				<button class="button-keep" @click="setType('noteTxt')"> <img src="/../../../img/apps/keep/text.png" alt="addTxt"> </button>
				<button class="button-keep" @click="setType('noteImg')"> <img src="'/../../../img/apps/keep/image.png" alt="addImg"> </button>
				<button class="button-keep" @click="setType('noteTodos')"> <img src="/../../../img/apps/keep/checkbox.png" alt="addChkBox"> </button>          
				<button class="button-keep" @click="setType('noteVideo')"> <img src="/../../../img/apps/keep/video.png" alt="addChkBox"> </button>          
			</label>
			</div>
		</div>
		</section>
        <note-list  :notes="notesToShow" @deleted="deleteNote" /> 
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
		noteFilter,
	},

	data() {
		return {
			notes: [],
			inputType: 'inputTxt',
			newInfo: {},
			isEdit: false,
			editedNote: {},
			filterBy: null,
		};
	},

	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy.txt;
		},

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
			console.log('updated note');
			console.log(note);
			keepService
				.updateNote(note)
				.then(() => console.log('updating note', note.id))
				.then(() => {
					this.loadNotes();
				});
		},

		pinned(note) {
			this.onUpdateNote(note);
		},
	},

	computed: {
		notesToShow() {
			if (!this.filterBy) {
				return this.notes;
			}
			console.log(this.filterBy);
			const searchStr = this.filterBy.toLowerCase();
			const notesToShow = this.notes.filter((note) => {
				console.log(note);
				if (note.type === 'noteTxt')
					return note.info.txt.toLowerCase().includes(searchStr);
				if (note.type === 'noteImg')
					return note.info.title.toLowerCase().includes(searchStr);
				// if (note.type === 'noteVideo')
				// 	return note.info.txt.toLowerCase().includes(searchStr);
				// TODO: search fakes??? try 'what'
				if (note.type === 'noteTodos')
					return (
						note.info.label.toLowerCase().includes(searchStr) ||
						note.info.todos.filter((todo) => {
							todo.txt.toLowerCase().includes(searchStr);
						})
					);
			});
			return notesToShow;
		},
	},

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
