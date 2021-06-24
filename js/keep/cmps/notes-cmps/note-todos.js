// import notePreviewTodos from './note-preview-todos.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
	props: ['note'],
	template: `
	<section class="note ">
		<img @click="onPin" class="pin" src="../../../../img/apps/keep/pin.png" >
		<label >{{note.info.label}}</label>
		<!-- <note-preview-todos @updated="updateTodo" :todos="note.info.todos" />  -->
		<ul>
			<li class="todos" v-for="(todo,idx) in note.info.todos"> 
				<label > 
					<!-- //change so only happens when marked complete -->
					
					<input v-model="todo.isChecked" @change="complete(todo,idx)" type="checkbox" :name="todo.txt" :id="todo.txt">
					{{todo.txt}}
					<span v-if="todo.isChecked" > Completed at: {{formatTime(todo.doneAt)}}</span>
					
					
					
				</label>
			</li>
		</ul>
		
	</div>
	
	</section>
    `,

	methods: {
		formatTime(time) {
			// console.log(time);
			return new Date(time).toLocaleTimeString('en-il');
		},

		onPin() {
			console.log('pinned');
			this.note.isPinned = true;
			eventBus.$emit('pinned', this.note);
		},

		complete(todo, idx) {
			const newTodo = { ...todo };
			console.log(this.note.info.todos[idx]);
			if (!todo.isChecked) {
				newTodo.isChecked = true;
				newTodo.doneAt = Date.now();
				this.note.info.todos[idx] = newTodo;
				eventBus.$emit('checked', this.note);
			} else todo.isChecked = false;
		},
	},

	computed: {},

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
