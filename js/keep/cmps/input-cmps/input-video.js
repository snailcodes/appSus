// TODO: SUPPORT EMBED
export default {
	props: ['editedNote'],
	template: `  
    
        <form v-on:keyup.enter="submit">
            <input v-model="info.title" class="input-keep" type="text" placeholder="Title">
            <label> URL:  </label>
            <input type="url" v-model="info.url" placeholder="Enter URL" >
                
    </form> 
    `,

	data() {
		return {
			info: {
				url: null,
				title: null,
			},
		};
	},

	methods: {
		submit() {
			// console.log('submitting txt');
			const newInfo = { ...this.info };
			console.log(this.info.url);
			this.$emit('submitting', newInfo, 'noteVideo');
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

// id: storageService.makeId(),
// 			style: { backgroundColor: 'lightblue' },
// 			type: 'noteImg',
// 			info: {
// 				url: 'https://img.vcomments.com/en/funny/47.jpg',
// 				title: 'Me   playing Mi',
// 			},

// https://cdn.vox-cdn.com/thumbor/8CIbT8aMgmLzG6vTzbWil2LwdWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19938259/3zlqxf_copy.jpg
