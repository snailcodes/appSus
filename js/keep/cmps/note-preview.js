import noteText from './notes-cmps/note-text.js';
import noteImg from './notes-cmps/note-img.js';
import noteTodos from './notes-cmps/note-todos.js';

export default {
	props: ['note'],
	template: `
    <div class="note-preview" >
        <!-- {{note}} -->
        <!-- {{noteType}} -->
        <!-- BUG IS -->
        <component is="note-text" :info="noteInfo" > </component>
        <component is="note-img" :info="noteInfo" > </component>
        <component is="note-todos" :info="noteInfo" > </component>
		
    </div>
    `,
	components: {
		noteText,
		noteImg,
		noteTodos,
	},
	data() {
		return {
			noteType: null,
			noteInfo: null,
		};
	},
	computed: {
		noteTxt() {
			console.log(this.note.type);
			console.log('sanity');
		},
	},
	created() {
		this.noteType = this.note.type;
		this.noteInfo = this.note.info;

		console.log(this.noteInfo);
		console.log(this.noteType);
		console.log('sanity from preview');
	},
	// if (this.note.type === 'NoteImg') this.noteImg();
	// if (this.note.type === 'NoteTodos') this.noteTodos();
};
