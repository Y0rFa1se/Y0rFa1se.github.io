<script lang="ts">
	import { onMount } from 'svelte';
    import CategoryToc from "$lib/CategoryToc.svelte";

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
	<title>Y0rFa1se</title>

	<meta property="og:title" content="Y0rFa1se" />
	<meta property="og:description" content="Y0rFa1se" />
	<meta property="og:url" content="https://Y0rFa1se.github.io/" />

	<meta name="description" content="Y0rFa1se" />

	<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
</svelte:head>

<h1>Y0rFa1se</h1>

<p class="author">
	Eunjun Lee<br />
	Major in Mathematics & Computer Science<br />
	Hanyang University, 2023
</p>

<div class="abstract">
	<h2>Abstract</h2>
	<p>Hello</p>
</div>

<div class="content">
    <h2>Research Notes</h2>
    <CategoryToc />
</div>

<hr />

<a href="https://github.com/Y0rFa1se">Github</a><br>
<a href="https://github.com/Y0rFa1se/Y0rFa1se.github.io">Repository</a>

<br><br><br>