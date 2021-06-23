// import notePreviewTodos from './note-preview-todos.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
	props: ['note'],
	template: `
	<section class="note ">
	<label >{{note.info.label}}</label>
		<!-- <note-preview-todos @updated="updateTodo" :todos="note.info.todos" />  -->
		<ul>
    <li class="todos" v-for="todo in note.info.todos"> 
        <label > 
        <input  @change="complete(todo)" type="checkbox" :name="todo.txt" :id="todo.txt">
				{{todo.txt}}
				{{todo.doneAt}}
    	</label>
</li>
    </ul>
		
	</div>
	</section>
    `,
	methods: {
		// updateTodo() {
		// 	console.log('sanity');
		// 	console.log(this.note);
		// 	// eventBus.$emit('updated');
		// 	// eventBus.$emit('updated', this.note);
		// },

		complete(todo) {
			todo.doneAt = Date.now();
			console.log(this.note);
			// console.log(todo);
			eventBus.$emit('checked', this.note);
		},
	},
	mounted() {},

	created() {},
};

// {        type: "NoteTodos",
//          info:
// 		 { label: "How    was   it:",
// 		  todos:
// 		   [ { txt:    "Do   that", doneAt: null    },
// 		   { txt:    "Do   this", doneAt: 187111111 } ]
// }
