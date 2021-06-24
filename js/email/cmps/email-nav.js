import emailStatus from '../cmps/email-status.js';

export default {
    props: ['emails'],
    template: `
    <ul class="email-nav">
        <li>
            <button @click="onComposeEmail" class="btn-email-compose">➕ Compose</button>
        </li>
        <li>
            <div class="nav-inbox" @click="handleClick('inbox')">
                <img src="img/apps/email/inbox.png"/>
                Inbox
            </div>
        </li>
        <li>
            <div class="nav-starred" @click="handleClick('starred',$event)">
                <img src="img/apps/email/starwhite.png"/>
                Starred
            </div>
        </li>
        <li>
            <div class="nav-sent" @click="handleClick('sent',$event)">
                <img src="img/apps/email/sent.png"/>
                Sent
            </div>
        </li>
        <li>
            <div class="nav-deleted" @click="handleClick('deleted',$event)">
                <img src="img/apps/email/delete.png"/>
                Deleted
            </div>
        </li>
        <li>
            <email-status :emails="emails"/>
        </li>
    </ul>
    `,
    components: {
        emailStatus
    },
    methods: {
        onSelectNav(page) {
            this.$emit('navigate', page);
        },
        onComposeEmail() {
            this.$emit('compose');
        },
        handleClick(route) {
            const searchBy = {
                route
            }
            this.$emit('navigate', searchBy);
            for (const li of this.$el.children) {
                if (li.children[0].className.includes(route))
                    li.children[0].classList.add('active')
                else li.children[0].classList.remove('active')
            }
        }
    }
};