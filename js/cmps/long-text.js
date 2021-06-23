export default {
    props: ['txt', 'length'],
    template: `
                <p>
                    {{toggleTxtLength}}<br><br>
                    <span v-if="txt.length > 100 && !isFullDesc" @click="isFullDesc=true" class="read-more">Read more...</span>
                    <span v-if="txt.length > 100 && isFullDesc" @click="isFullDesc=false" class="read-less">Read less</span>
                </p>
            `,
    data() {
        return {
            isFullDesc: false
        }
    },
    computed: {
        toggleTxtLength() {
            if (this.isFullDesc) return this.txt.repeat(2)
            return this.txt.substring(0, +this.length) + '...'
        }
    }
};