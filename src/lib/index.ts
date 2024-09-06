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

export type MainNavItem = NavItem;

export type MarketingConfig = {
	mainNav: MainNavItem[];
};

export type SidebarNavItem = {
	title: string;
	items: NavItem[];
	icon?: keyof typeof Icons;
};

export type DocsConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
};
