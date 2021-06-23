import keepApp from './keep/pages/keep-app.js';
import emailApp from './email/pages/email-app.js';
import { router } from './router.js';

const options = {
    el: '#apps',
    router,
    template: `
    <section>
        <!-- TODO: HEADER-->
        <!-- <app-header />  -->

        <!-- TEMP NAV -->
        <nav>
            <router-link to="/email"  active-class="active-link" >Email</router-link> |
            <router-link to="/keep"  active-class="active-link" >Keep</router-link> |
        </nav>
        <router-view />

    </section>`,

    components: {
        // appHeader,
        // bookApp,
        emailApp,
        keepApp,
    },
};

const app = new Vue(options);