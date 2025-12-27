<script lang="ts">
	import '../app.css';

	let { children } = $props();

	import { onMount } from 'svelte';
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

	onMount(() => {
		if (typeof kofiWidgetOverlay !== 'undefined') {
		kofiWidgetOverlay.draw('y0rfa1se', {
			'type': 'floating-chat',
			'floating-chat.donateButton.text': 'Support me',
			'floating-chat.donateButton.background-color': '#323842',
			'floating-chat.donateButton.text-color': '#fff'
		});
		}
	});
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

	<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
</svelte:head>

{@render children()}