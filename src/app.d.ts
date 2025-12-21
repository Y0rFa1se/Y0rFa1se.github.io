declare global {
	namespace App {
	}

	interface Window {
		Prism?: {
			highlightAll: () => void;
		};
	}
	
	declare module '*.md' {
		const Component: import('svelte').ComponentType;
		export default Component;
		export const metadata: Record<string, any>;
	}
}

export {};