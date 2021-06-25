import emailApp from './email/pages/email-app.js';
import keepApp from './keep/pages/keep-app.js';
import emailCompose from './email/cmps/email-compose.js';
import emailDetails from './email/pages/email-details.js';

const routes = [{
        path: '/email/:emailId?',
        component: emailDetails,
    },
    {
        name: 'noteToEmail',
        path: '/email/composeFromNote/:note?',
        component: emailCompose,
    },
    {
        name: 'emailToNote',
        path: '/keep/composeFromEmail/:email?',
        component: keepApp,
    },
    {
        path: '/email/',
        component: emailApp,
    },
    {
        path: '/keep',
        component: keepApp,
    },
];

export const router = new VueRouter({ routes });