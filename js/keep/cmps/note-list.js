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
            <label> <input v-model="input" type="text" @click="addNote" placeholder="Write to add Note">
            <button  @click="addNote('noteImg')"> <img src="../../../img/apps/keep/image.png" alt="addImg"> </button>
            <button @click="addNote('noteTxt')"> <img src="../../../img/apps/keep/text.png" alt="addTxt"> </button>
            <button @click="addNote('noteTodos')"> <img src="../../../img/apps/keep/checkbox.png" alt="addChkBox"> </button>          
            
        </label>
    </div>
    
    <ul class="notesList">
            <li v-for="note in notes" :key="note.id" class="note-container"> 
			<!-- add variable note object to make each note's style change? -->
                <component :style="noteBcg" :is="note.type" :note="note" > </component>
				<button class="btnColor" @click="changeBcg('yellow')"> <span class="circle circle-yellow"> </span> </button>
				<button class="btnColor" @click="changeBcg('gray')"> <span  class="circle circle-gray"></span> </button>
				<button class="btnColor" @click="changeBcg('lightblue')"> <span  class="circle circle-lightblue"></span> </button>
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

	data() {
		return {
			bcg: 'lightblue',
			// input: {},
		};
	},

	methods: {
		changeBcg(color) {
			console.log('sanity color');
			this.bcg = color;
		},

		addNote(type) {
			console.log('sanity adding');
			switch (type) {
				case 'noteImg':
					console.log('img');
					break;
				case 'noteTxt':
					console.log('txt');
					break;
				case 'noteTodos':
					console.log('todos');
					break;

				default:
					break;
			}
		},

		onDelNote(note) {
			console.log('removing sanity');
			console.log(note.id);
			this.$emit('deleted', note.id);
		},
	},

	computed: {
		noteBcg() {
			return {
				'background-color': this.bcg,
			};
		},
	},

	created() {
		console.log('sanity list');
	},
};
