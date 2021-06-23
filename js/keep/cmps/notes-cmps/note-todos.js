import notePreviewTodos from './note-preview-todos.js';

export default {
	props: ['info'],
	template: `
	<section>
	<label >{{info.label}}</label>
		
		<note-preview-todos :todos="this.info.todos" /> 
		

	</div>
	</section>
    `,
	components: { notePreviewTodos },

	created() {
		console.log('sanity from noteTodos');
	},
};

// {        type: "NoteTodos",
//          info:
// 		 { label: "How    was   it:",
// 		  todos:
// 		   [ { txt:    "Do   that", doneAt: null    },
// 		   { txt:    "Do   this", doneAt: 187111111 } ]
// }
