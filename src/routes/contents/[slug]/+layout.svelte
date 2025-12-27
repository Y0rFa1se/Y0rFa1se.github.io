<script lang="ts">
    import Giscus from '$lib/Giscus.svelte';

	let { children } = $props();
</script>

{@render children()}

<Giscus />

<br><br><br>