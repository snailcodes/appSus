// TODO: SUPPORT UPLOAD FROM FILE
export default {
	props: ['editedNote'],
	template: `  
    
        <form v-on:keyup.enter="submit">
            <input  v-model="info.title" class="input-keep" type="text" placeholder="Title">
            <label> URL:  </label>
            <button class="button-keep" @click.stop="isFromFile"> <img  src="../../../../img/apps/keep/upload.png" alt="uploadFile"> </button>
            <input  type="url" v-model="info.url" placeholder="Enter URL" >
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
