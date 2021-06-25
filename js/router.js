import emailApp from './email/pages/email-app.js';
import emailCompose from './email/cmps/email-compose.js';
import keepApp from './keep/pages/keep-app.js';

const routes = [
	{
		path: '/email/:emailId?',
		component: emailApp,
	},
	{
		name: 'composenote',
		path: '/email/composeFromNote/:note?',
		component: emailCompose,
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
