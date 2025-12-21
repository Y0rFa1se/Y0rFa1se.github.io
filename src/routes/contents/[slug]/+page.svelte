<script lang="ts">
    export let data;

    const modules = import.meta.glob('/src/contents/*.md', { eager: true });

    const path = `/src/contents/${data.slug}.md`;
    const mod = modules[path] as any;
    const Page = mod?.default;
</script>

<svelte:head>
	<title>{data.slug}</title>

	<meta property="og:title" content={data.slug} />
	<meta property="og:description" content={data.slug} />
	<meta property="og:url" content={`https://Y0rFa1se.github.io/${data.slug}`} />

	<meta name="description" content={data.slug} />
</svelte:head>

{#if Page}
    <main>
        <svelte:component this={Page} />
    </main>
{:else}
    <main>
        <p>Cannot find the post.</p>
    </main>
{/if}