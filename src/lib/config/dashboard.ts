import type { SidebarNavItem } from '$lib';

export const sidebarLinks: SidebarNavItem[] = [
	{
		title: 'MENU',
		items: [
			{
				href: '/admin',
				icon: 'laptop',
				title: 'Admin Panel'
			},
			{ href: '/dashboard', icon: 'dashboard', title: 'Dashboard' },
			{
				href: '/dashboard/billing',
				icon: 'billing',
				title: 'Billing'
			},
			{ href: '/dashboard/charts', icon: 'lineChart', title: 'Charts' },
			{
				href: '/admin/orders',
				icon: 'package',
				title: 'Orders',
				badge: 2
			},
			{
				href: '#/dashboard/posts',
				icon: 'post',
				title: 'User Posts',
				disabled: true
			}
		]
	},
	{
		title: 'OPTIONS',
		items: [
			{ href: '/dashboard/settings', icon: 'settings', title: 'Settings' },
			{ href: '/', icon: 'home', title: 'Homepage' },
			{ href: '/docs', icon: 'bookOpen', title: 'Documentation' },
			{
				href: '#',
				icon: 'messages',
				title: 'Support',
				disabled: true
			}
		]
	}
];
