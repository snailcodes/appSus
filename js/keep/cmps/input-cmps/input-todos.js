// <!-- TODO: figure how to correctly display todo fields in edit -->
// <!-- TODO: figure out how to submit enter -->
export default {
	props: ['editedNote'],
	template: `  
    <form v-on:keyup.enter.stop="submit" >
        <input v-model="info.label" class="input-keep" type="text" placeholder="Todo Title">
        <section v-for="todo in info.todos"> 
            <input v-model="todo.txt" @change="makeIdx(todo)" class="input-keep" type="text" placeholder="Add Task">
            
            <!-- <input class="input-keep" type="text" placeholder="Add Task">
            <input class="input-keep" type="text" placeholder="Add Task"> -->
            </section>
            <button class="button-keep" @click.stop="addLine">➕</button>
    </form>`,

	data() {
		return {
			info: {
				label: null,
				todos: [
					{
						id: null,
						txt: null,
						doneAt: null,
						isMarked: false,
					},
				],
			},
		};
	},

	methods: {
		submit() {
			// console.log('submitting txt');
			const newInfo = { ...this.info };
			this.$emit('submitting', newInfo, 'noteTodos');
			this.info.label = '';
			this.info.todos.forEach((todo) => {
				todo.txt = '';
			});
		},

		makeIdx(todo) {
			const idx = 0;
			const id = 'idx' + this.info.todos.length;
			todo.id = id;
		},

		addLine() {
			const newTodo = {
				id: null,
				txt: null,
				doneAt: null,
				isMarked: false,
			};
			this.info.todos.push(newTodo);
		},
	},
	mounted() {},

	created() {
		if (this.editedNote) {
			this.info.label = this.editedNote.info.label;
			this.info.todos = [...this.editedNote.info.todos];
		}
		// console.log(this.info);
	},
};
