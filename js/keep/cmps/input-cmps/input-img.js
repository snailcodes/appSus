// TODO: SUPPORT UPLOAD FROM FILE - research File Reader
export default {
	props: ['editedNote'],
	template: `  
    
        <form class="keep-form" v-on:keyup.enter="submit">
			<h3 v-if="editedNote"> Edit Image Note  </h3>
			<h4 class="keep-add-text" class="keep-add-text" v-else> Add Image Note </h4>
            <input class="input-keep" v-model="info.title"  type="text" placeholder="Write Title">
            <input v-if="!fromFile" class="input-keep" type="url" v-model="info.url" placeholder="Enter URL" >
            <!-- <button class="button-keep" @click="isFromFile"> 
			<img  src="../../../../img/apps/keep/upload.png" alt="uploadFile"> </button>
            <input v-if="fromFile" @change="onFile" type="file"> -->
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
			const newInfo = { ...this.info };
			console.log(this.info.url);
			this.$emit('submitting', newInfo, 'noteImg');
			this.info.url = '';
			this.info.title = '';
		},

		onFile(file) {},
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
