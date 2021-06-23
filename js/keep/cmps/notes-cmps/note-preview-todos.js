export default {
	props: ['todos'],
	template: `
    <ul>
    <li v-for="todo in todos"> 
        <label> 
        <input v-model="checked" type="checkbox" :name="todo.txt" :id="todo.txt">
    {{todo.txt}}
    {{todo.doneAt}}
    </label>
</li>
    </ul>
        
    `,

	data() {
		return {
			doneAt: null,
		};
	},

	methods: {},
	computed: {
		checkedBox() {},
	},

	created() {
		console.log('sanity from todos preview');
		console.log(this.todos);
	},
};

// {        type: "NoteTodos",
//          info:
// 		 { label: "How    was   it:",
// 		  todos:
// 		   [ { txt:    "Do   that", doneAt: null    },
// 		   { txt:    "Do   this", doneAt: 187111111 } ]
// }
