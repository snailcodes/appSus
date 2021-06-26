import emailApp from './email/pages/email-app.js';
import keepApp from './keep/pages/keep-app.js';
import emailDetails from './email/pages/email-details.js';
import homePage from './pages/home-page.js'

const routes = [{
        path: '/',
        component: homePage,
    },
    {
        path: '/email',
        component: emailApp,
    },
    {
        path: '/keep',
        component: keepApp,
    },
    {
        name: 'emailDisplay',
        path: '/email/:emailId?',
        component: emailDetails,
    },
    {
        name: 'noteToEmail',
        path: '/email/composeFromNote/:note?',
        component: emailApp,
    },
    {
        name: 'emailToNote',
        path: '/keep/composeFromEmail/:email?',
        component: keepApp,
    }
];

export const router = new VueRouter({ routes });