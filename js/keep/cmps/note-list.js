// import notePreview from './note-preview.js';
import noteTxt from './notes-cmps/note-txt.js';
import noteImg from './notes-cmps/note-img.js';
import noteTodos from './notes-cmps/note-todos.js';
import noteVideo from './notes-cmps/note-video.js';

export default {
	props: ['notes'],
	template: `
    <section>
      
    <ul class="notesList">
            <li v-for="note in notes" :key="note.id" class="note-container"> 
			<!-- add variable note object to make each note's style change? -->
                <component :style="noteBcg" :is="note.type" :note="note" > </component>
				<button class="button-keep" @click="changeBcg('yellow')"> <span class="circle circle-yellow"> </span> </button>
				<button class="button-keep" @click="changeBcg('gray')"> <span  class="circle circle-gray"></span> </button>
				<button class="button-keep" @click="changeBcg('lightblue')"> <span  class="circle circle-lightblue"></span> </button>
                <button class="button-keep" @click="onDelNote(note)"> Remove </button>
                <button class="button-keep"> Edit  </button>
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
		addInput() {
			console.log('sanity');
		},
		changeBcg(color) {
			console.log('sanity color');
			this.bcg = color;
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
