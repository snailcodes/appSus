export default {
    props: ['emails'],
    template: `
    <div class="email-read-status">
        <span>{{calcReadProgress()}}</span>
        <div class="email-read-status-progress" v-bind:style="{width: calcReadProgress()}"></div>
    </div>
    `,
    methods: {
        calcReadProgress() {
            let readCount = 0;
            let totalCount = 0;
            for (const idx in this.emails) {
                if (this.emails[idx].isRead) readCount++;
                totalCount++;
            }
            const progress = ((readCount / totalCount) * 100).toFixed(0);
            return !isNaN(progress) ? `${progress}%` : '0%'
        }
    },
}