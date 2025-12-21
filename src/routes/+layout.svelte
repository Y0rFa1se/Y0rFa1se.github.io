<script lang="ts">
	import '../app.css';

	let { children } = $props();

	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	if (browser) {
		afterNavigate(() => {
			setTimeout(() => {
				if (window.Prism?.highlightAll) {
					window.Prism.highlightAll();
				}
			}, 0);
		});
	}	
</script>

<svelte:head>
	<link rel="stylesheet" href="https://latex.vercel.app/style.css" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css"
		integrity="sha384-WcoG4HRXMzYzfCgiyfrySxx90XSl2rxY5mnVY5TwtWE6KLrArNKn0T/mOgNL0Mmi"
		crossorigin="anonymous"
	/>
	<link rel="stylesheet" href="https://latex.vercel.app/prism/prism.css" />

	<link
		rel="icon"
		type="image/png"
		href="/favicon.png"
	/>
	<meta
		property="og:image"
		content="/favicon.png"
	/>
</svelte:head>

{@render children()}