export default {
    template: `
    <nav class="top-navs">
        <ul class="app-nav">
            <li>
                <router-link to="/book"  active-class="active-link">Ms. Book</router-link>
            </li>
            <li>
                <router-link to="/email"  active-class="active-link">Mr. Email</router-link>  
            </li>
            <li>
                <router-link to="/keep"  active-class="active-link" >Ms. Keep</router-link>
            </li>
        </ul>
        <div class="top-nav-button" @click="onToggleAppNav">&nbsp;</div>
    </nav>
    `,
    methods: {
        onToggleAppNav() {
            document.querySelector('.top-navs').classList.toggle("active");
        },
    }
};