<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let container: HTMLDivElement;
	let scriptEl: HTMLScriptElement | null = null;

	onMount(() => {
		container.innerHTML = '';

		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.async = true;

		script.setAttribute('data-repo', 'Y0rFa1se/Y0rFa1se.github.io');
		script.setAttribute('data-repo-id', 'R_kgDOQsi9dw');
		script.setAttribute('data-category', 'Announcements');
		script.setAttribute('data-category-id', 'DIC_kwDOQsi9d84C0EYS');
		script.setAttribute('data-mapping', 'pathname');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '1');
		script.setAttribute('data-input-position', 'top');
		script.setAttribute('data-theme', 'preferred_color_scheme');
		script.setAttribute('data-lang', 'ko');
		script.setAttribute('crossorigin', 'anonymous');

		script.onload = () => console.log('[giscus] script loaded');
		script.onerror = (e) => console.error('[giscus] script load failed', e);

		container.appendChild(script);
		scriptEl = script;
	});

	onDestroy(() => {
		if (scriptEl?.parentNode) scriptEl.parentNode.removeChild(scriptEl);
		scriptEl = null;
		if (container) container.innerHTML = '';
	});
</script>

<div bind:this={container}></div>
