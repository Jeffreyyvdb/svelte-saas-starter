import { writable } from 'svelte/store';

export type Device = 'mobile' | 'sm' | 'tablet' | 'desktop' | null;
export type Dimensions = {
	width: number;
	height: number;
};

export type DeviceInformation = {
	device: Device;
	width: number;
	height: number;
	isMobile: boolean;
	isSm: boolean;
	isTablet: boolean;
	isDesktop: boolean;
};

// can be used in the following way:
// const screenInfo = useMediaQuery(browser);
// // Use a reactive statement to ensure `isTablet` updates with `screenInfo`
// $: isTablet = $screenInfo?.isTablet ?? false;
export const useMediaQuery = (browser: boolean) => {
	const { subscribe, set } = writable<DeviceInformation>(undefined, () => {
		if (!browser) {
			set({
				device: null,
				width: 0,
				height: 0,
				isMobile: false,
				isSm: false,
				isTablet: false,
				isDesktop: false
			});
			return () => {};
		} else {
			set(getDeviceInformation(window));

			const onchange = () => set(getDeviceInformation(window));

			// Add event listeners for window resize
			window.addEventListener('resize', onchange);
			window.addEventListener('orientationchange', onchange);

			// Cleanup function to remove event listeners
			return () => {
				window.removeEventListener('resize', onchange);
				window.removeEventListener('orientationchange', onchange);
			};
		}
	});

	return { subscribe };
};

function getDeviceInformation(window: Window) {
	let device: 'mobile' | 'sm' | 'tablet' | 'desktop' | null = null;
	let dimensions: {
		width: number;
		height: number;
	} | null = null;

	if (window.matchMedia('(max-width: 640px)').matches) {
		device = 'mobile';
	} else if (window.matchMedia('(max-width: 768px)').matches) {
		device = 'sm';
	} else if (window.matchMedia('(min-width: 641px) and (max-width: 1024px)').matches) {
		device = 'tablet';
	} else {
		device = 'desktop';
	}
	dimensions = { width: window.innerWidth, height: window.innerHeight };

	return {
		device,
		width: dimensions?.width,
		height: dimensions?.height,
		isMobile: device === 'mobile',
		isSm: device === 'sm',
		isTablet: device === 'tablet',
		isDesktop: device === 'desktop'
	};
}

export const useScroll = (threshold: number, browser: boolean) => {
	const { subscribe, set } = writable<boolean>(false, () => {
		if (!browser) {
			set(false);
			return () => {};
		} else {
			const onScroll = () => set(window.scrollY > threshold);

			// Add event listeners for window resize
			window.addEventListener('scroll', onScroll);

			// Cleanup function to remove event listeners
			return () => {
				window.removeEventListener('scroll', onScroll);
			};
		}
	});

	return { subscribe };
};
