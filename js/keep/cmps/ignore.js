import noteTxt from './notes-cmps/note-txt.js';
import noteImg from './notes-cmps/note-img.js';
import noteTodos from './notes-cmps/note-todos.js';
import noteVideo from './notes-cmps/note-video.js';

export default {
	props: ['note'],
	template: `
    <div class="note-preview" >
      
        <component :is="note.type" :note="note" > </component>
		<section> 
            <button> Add </button>
            <button> Remove </button>
            <button> Edit  </button>
        </section>
    </div>
    `,

	components: {
		noteTxt,
		noteImg,
		noteTodos,
		noteVideo,
	},
	data() {
		return {};
	},
	computed: {},
	created() {
		console.log('sanity preview');
	},
};
