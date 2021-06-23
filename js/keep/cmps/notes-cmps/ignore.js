export default {
	props: ['todos'],
	template: `
    <ul>
    <li v-for="todo in todos"> 
        <label> 
        <input  @change="checked(todo)" type="checkbox" :name="todo.txt" :id="todo.txt">
    {{todo.txt}}
    {{todo.doneAt}}
    <!-- {{formatTime(todo.doneAt)}} -->
    </label>
</li>
    </ul>
        
    `,
	data() {
		return {
			doneAt: [],
		};
	},

	computed: {},

	methods: {
		formatTime() {
			console.log(this.doneAt);
			this.doneAt.forEach((doneAt) => {
				if (doneAt) {
					console.log(doneAt);
					console.log(doneAt.toLocaleDateString());
				}
			});
			// console.log('sanity');
		},
		checked(todo) {
			todo.doneAt = Date.now();
			console.log(todo.doneAt);
			this.$emit('updated', this.todo);
		},
	},
	computed: {},

	created() {
		this.todos.forEach((todo) => {
			this.doneAt.push(todo.doneAt);
		});
		// this.formatTime();
	},
};
