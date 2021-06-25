import emailStatus from '../cmps/email-status.js';

export default {
    props: ['emails'],
    template: `
    <nav class="email-nav">
        <ul class="email-nav-menu">
            <li>
                <button @click="onComposeEmail" class="btn-email-compose">🖊️ Compose</button>
            </li>
            <li>
                <div class="nav-inbox active" @click="handleClick('inbox')">
                    <img src="img/apps/email/inbox.png"/>
                    Inbox
                    <span>{{showUnreadCount}}</span>
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
                <email-status :emails="emails" @unread="updateUnreadCount"/>
            </li>
        </ul>
        <div class="hamburger" @click="onToggleHamMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    `,
    components: {
        emailStatus
    },
    data() {
        return {
            unreadCount: null
        }
    },
    methods: {
        updateUnreadCount(unreadCount) {
            this.unreadCount = unreadCount;
        },
        onSelectNav(page) {
            this.$emit('navigate', page);
        },
        onComposeEmail() {
            this.$emit('compose');
        },
        onToggleHamMenu() {
            document.querySelector('.hamburger').classList.toggle("active");
            document.querySelector('.email-nav-menu').classList.toggle("active");
        },
        handleClick(route) {
            const searchBy = {
                route
            }
            this.$emit('navigate', searchBy);
            for (const li of this.$el.children[0].children) {
                if (li.children[0].className.includes(route))
                    li.children[0].classList.add('active')
                else li.children[0].classList.remove('active')
            }
        },
    },
    computed: {
        showUnreadCount() {
            return this.unreadCount || ''
        }
    }
};