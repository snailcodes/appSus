export default {
    props: ['emails'],
    template: `
    <div class="email-read-status">
        {{calcReadCount}}
    </div>
    `,
    computed: {
        calcReadCount() {
            let readCount = 0;
            for (const idx in this.emails) {
                if (this.emails[idx].isRead) readCount++;
            }
            return readCount
        }
    },
};