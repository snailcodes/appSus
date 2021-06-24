// TODO: SUPPORT UPLOAD FROM FILE
export default {
	props: ['editedNote'],
	template: `  
    
        <form class="keep-form" v-on:keyup.enter="submit">
			
            <input class="input-keep" v-model="info.title"  type="text" placeholder="Title">
            <input class="input-keep" type="url" v-model="info.url" placeholder="Enter URL" >
            <button class="button-keep" @click.stop="isFromFile"> 

			<img  src="../../../../img/apps/keep/upload.png" alt="uploadFile"> </button>
            <!-- <input v-else type="file"> -->
                
   		 </form> 
    `,

	data() {
		return {
			info: {
				url: null,
				title: null,
			},
			fromFile: false,
		};
	},

	methods: {
		submit() {
			// console.log('submitting txt');
			const newInfo = { ...this.info };
			console.log(this.info.url);
			this.$emit('submitting', newInfo, 'noteImg');
			this.info.url = '';
			this.info.title = '';
		},

		updateUrl(val) {
			console.log(val);
			// this.info.url = val;
		},
		isFromFile() {
			this.fromFile = !this.fromFile;
		},
	},
	created() {
		if (this.editedNote) {
			this.info.title = this.editedNote.info.title;
			this.info.url = this.editedNote.info.url;
		}
	},
};
