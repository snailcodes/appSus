// import notePreview from './note-preview.js';
import noteTxt from './notes-cmps/note-txt.js';
import noteImg from './notes-cmps/note-img.js';
import noteTodos from './notes-cmps/note-todos.js';
import noteVideo from './notes-cmps/note-video.js';

export default {
	props: ['notes'],
	template: `
    <section>
        <div class="add-section">
            <label> <input type="text" @click="addNote" placeholder="Write to add Note">
            <button @click="addNote('noteImg')"> <img src="../../../img/apps/keep/image.png" alt="addImg"> </button>
            <button @click="addNote('noteTxt')"> <img src="../../../img/apps/keep/text.png" alt="addTxt"> </button>
            <button @click="addNote('noteTodos')"> <img src="../../../img/apps/keep/checkbox.png" alt="addChkBox"> </button>          
            
        </label>
    </div>
    
    <ul class="notesList">
            <li v-for="note in notes" :key="note.id" class="note-container"> 
                <component :is="note.type" :note="note" > </component>
                
                <button @click="onDelNote(note)"> Remove </button>
                <button> Edit  </button>
                <!-- <notePreview :note="note" /> -->
            </li>
        </ul>
        </section>
    `,

	components: {
		// notePreview,
		noteTxt,
		noteImg,
		noteTodos,
		noteVideo,
	},

	methods: {
		addNote() {
			console.log('sanity adding');
		},

		onDelNote(note) {
			console.log('removing sanity');
			console.log(note.id);
			this.$emit('deleted', note.id);
		},
	},

	computed: {},

	created() {
		console.log('sanity list');
	},
};
