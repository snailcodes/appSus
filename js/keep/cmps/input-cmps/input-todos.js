// <!-- TODO: make number of fields reactive to button -->
export default {
	template: `  
    <form v-on:keyup.enter="submit">
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

	created() {
		console.log(this.info);
	},
};
