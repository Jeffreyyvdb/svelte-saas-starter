import { type SidebarNavItem, type SiteConfig } from '$lib';
import { base } from '$app/paths';

const site_url = base;

export const siteConfig: SiteConfig = {
	name: 'Saas Starter',
	description: 'Get your project off to an explosive start with SaaS Starter!',
	url: site_url,
	ogImage: `${site_url}/_static/og.jpg`,
	links: {
		twitter: 'https://twitter.com/jeffreyyvdb',
		github: 'https://github.com/jeffreyyvdb'
	},
	mailSupport: ''
};

export const footerLinks: SidebarNavItem[] = [
	{
		title: 'Company',
		items: [
			{ title: 'About', href: '#' },
			{ title: 'Enterprise', href: '#' },
			{ title: 'Terms', href: '/terms' },
			{ title: 'Privacy', href: '/privacy' }
		]
	},
	{
		title: 'Product',
		items: [
			{ title: 'Security', href: '#' },
			{ title: 'Customization', href: '#' },
			{ title: 'Customers', href: '#' },
			{ title: 'Changelog', href: '#' }
		]
	},
	{
		title: 'Docs',
		items: [
			{ title: 'Introduction', href: '#' },
			{ title: 'Installation', href: '#' },
			{ title: 'Components', href: '#' },
			{ title: 'Code Blocks', href: '#' }
		]
	}
];
