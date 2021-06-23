// import mailApp from './mail/pages/mail-app.js';
import keepApp from './keep/pages/keep-app.js';

const routes = [
	// {
	// 	path: '/mail',
	// 	component: mailApp,
	// },
	{
		path: '/keep',
		component: keepApp,
	},
];

export const router = new VueRouter({ routes });
