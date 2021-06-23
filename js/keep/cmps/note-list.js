import notePreview from './note-preview.js';

export default {
	props: ['notes'],
	template: `
        <ul class="notesList">
            <li v-for="note in notes" :key="note.id" class="note-container"> 
                <notePreview :note="note" />
            </li>
        </ul>
    `,

	components: {
		notePreview,
	},

	methods: {},

	computed: {},

	created() {},
};
