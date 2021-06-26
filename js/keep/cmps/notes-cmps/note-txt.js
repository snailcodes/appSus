import longText from '../../../cmps/long-text.js';

export default {
	props: ['note'],
	template: `
    <section class="note note-txt">
		<p> {{note.info.title}}</p>
		
		<long-text  v-if="toggleDis" :txt="note.info.txt" :length="60">  </long-text>
	 
		<p v-if="!toggleDis" >{{note.info.txt}}  </p>
		<!-- <button class="button-keep long-txt" v-if="isLong" id="more-less" @click="isExpand"> {{button.text}} </button> -->
		<button class="button-keep long-txt" v-if="isLong" id="more-less" @click="isExpand"> {{button.text}} </button>


	</section>
        
    `,

	components: {
		longText,
	},

	data() {
		return {
			toggleDis: false,
			isLong: false,

			button: {
				text: 'Read More ˅',
			},
		};
	},

	methods: {
		isExpand() {
			this.toggleDis = !this.toggleDis;
			// this.button.text = this.toggleDis ? '˅' : '˄';
			this.button.text = this.toggleDis ? 'Read More ˅' : 'Read Less ˄';
		},
	},

	mounted() {},

	created() {
		// this.note.style.textAlign = 'justify';
		// this.note.style.display = 'inline-block';
		// this.note.style.padding = '5px';
		const length = this.note.info.txt.length;
		if (length > 60) {
			this.toggleDis = true;
			this.isLong = true;
		} else {
			this.toggleDis = false;
			this.isLong = false;
		}
	},
};
