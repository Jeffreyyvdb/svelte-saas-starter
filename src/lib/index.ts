// place files you want to import through the `$lib` alias in this folder.
import { type Icons } from './components/shared/icons';

export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	mailSupport: string;
	links: {
		twitter: string;
		github: string;
	};
};

export type NavItem = {
	title: string;
	href: string;
	badge?: number;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
};

export type SidebarNavItem = {
	title: string;
	items: NavItem[];
	icon?: keyof typeof Icons;
};
