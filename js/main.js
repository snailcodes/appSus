import keepApp from './keep/pages/keep-app.js';
// import mailApp from './mail/pages/mail-app.js';
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
            <!-- <router-link to="/mail"  active-class="active-link" >Mail</router-link> | -->
            <router-link to="/keep"  active-class="active-link" >Keep</router-link> |
        </nav>
        <router-view />

    </section>`,

	components: {
		// appHeader,
		// bookApp,
		// mailApp,
		keepApp,
	},
};

const app = new Vue(options);
