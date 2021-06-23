import emailApp from './email/pages/email-app.js';
import keepApp from './keep/pages/keep-app.js';

const routes = [{
        path: '/email/:emailId?',
        component: emailApp,
    },
    {
        path: '/keep',
        component: keepApp,
    },
];

export const router = new VueRouter({ routes });