// import notePreviewTodos from './note-preview-todos.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
	props: ['note'],
	template: `
	<section class="note note-todos ">
		<!-- <img @click="onPin" class="pin" src="../../../../img/apps/keep/pin.png" > -->
		<label >{{note.info.label}}</label>
		<!-- <note-preview-todos @updated="updateTodo" :todos="note.info.todos" />  -->
		<ul>
			<li class="todos" v-for="(todo,idx) in note.info.todos"> 
				<label > 
					<!-- //change so only happens when marked complete -->
					<input v-model="todo.isChecked" @click="complete(todo,idx)" type="checkbox" :name="todo.txt" :id="todo.txt">
					{{todo.txt}} 
					<span class="todos-completed" v-if="todo.isChecked" > {{formatDate(todo.doneAt)}} ({{formatTime(todo.doneAt)}})</span>
				</label>
			</li>
		</ul>
		
	</div>
	
	</section>
    `,

	methods: {
		formatTime(time) {
			return new Date(time).toLocaleTimeString('en-il');
		},
		formatDate(time) {
			const date = new Date(time);
			return new Intl.DateTimeFormat().format(date);
		},

		complete(todo, idx) {
			const completedTodo = { ...todo };
			console.log(this.note.info.todos[idx]);
			if (!todo.isChecked) {
				completedTodo.isChecked = true;
				completedTodo.doneAt = Date.now();
				this.note.info.todos[idx] = completedTodo;
				eventBus.$emit('checked', this.note);
				// this.note.style.textDecoration = 'line-through';
			} else {
				todo.isChecked = false;
				// this.note.style.textDecoration = 'unset';
			}
		},
	},

	mounted() {},

	created() {
		this.note.style.textAlign = 'left';
		this.note.style.display = 'inline-block';
	},
};

// {        type: "NoteTodos",
//          info:
// 		 { label: "How    was   it:",
// 		  todos:
// 		   [ { txt:    "Do   that", doneAt: null    },
// 		   { txt:    "Do   this", doneAt: 187111111 } ]
// }
