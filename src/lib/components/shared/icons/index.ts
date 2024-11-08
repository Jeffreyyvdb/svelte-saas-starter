import { AlertTriangle } from 'lucide-svelte';
import ArrowRight from 'lucide-svelte/icons/arrow-right';
import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
import BookOpen from 'lucide-svelte/icons/book-open';
import Check from 'lucide-svelte/icons/check';
import ChevronLeft from 'lucide-svelte/icons/chevron-left';
import ChevronRight from 'lucide-svelte/icons/chevron-right';
import Copy from 'lucide-svelte/icons/copy';
import CreditCard from 'lucide-svelte/icons/credit-card';
import Dumbbell from 'lucide-svelte/icons/dumbbell';
import File from 'lucide-svelte/icons/file';
import FileText from 'lucide-svelte/icons/file-text';
import { HelpCircle } from 'lucide-svelte';
import { Home } from 'lucide-svelte';
import Image from 'lucide-svelte/icons/image';
import Laptop from 'lucide-svelte/icons/laptop';
import LayoutPanelLeft from 'lucide-svelte/icons/layout-panel-left';
import { LineChart } from 'lucide-svelte';
import { Loader2 } from 'lucide-svelte';
import MessagesSquare from 'lucide-svelte/icons/messages-square';
import Moon from 'lucide-svelte/icons/moon';
import { MoreVertical } from 'lucide-svelte';
import NotebookPen from 'lucide-svelte/icons/notebook-pen';
import Package from 'lucide-svelte/icons/package';
import Plus from 'lucide-svelte/icons/plus';
import Puzzle from 'lucide-svelte/icons/puzzle';
import Search from 'lucide-svelte/icons/search';
import Settings from 'lucide-svelte/icons/settings';
import SunMedium from 'lucide-svelte/icons/sun-medium';
import Trash from 'lucide-svelte/icons/trash';
import Trophy from 'lucide-svelte/icons/trophy';
import User from 'lucide-svelte/icons/user';
import X from 'lucide-svelte/icons/x';
import type { Icon as LucideIcon } from 'lucide-svelte';

import GoogleIcon from './google-icon.svelte';
import GitHubIcon from './github-icon.svelte';
import TwitterIcon from './twitter-icon.svelte';
import AppleIcon from './apple-icon.svelte';

export type Icon = LucideIcon;

export const Icons = {
	add: Plus,
	apple: AppleIcon,
	arrowRight: ArrowRight,
	arrowUpRight: ArrowUpRight,
	billing: CreditCard,
	bookOpen: BookOpen,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	check: Check,
	close: X,
	copy: Copy,
	dashboard: LayoutPanelLeft,
	dumbbell: Dumbbell,
	ellipsis: MoreVertical,
	gitHub: GitHubIcon,
	google: GoogleIcon,
	help: HelpCircle,
	home: Home,
	laptop: Laptop,
	lineChart: LineChart,
	logo: Trophy,
	media: Image,
	messages: MessagesSquare,
	moon: Moon,
	notebookPen: NotebookPen,
	package: Package,
	page: File,
	post: FileText,
	puzzle: Puzzle,
	search: Search,
	settings: Settings,
	spinner: Loader2,
	sun: SunMedium,
	trash: Trash,
	twitter: TwitterIcon,
	user: User,
	warning: AlertTriangle
};
