<script lang="ts">
    export let data;

    const modules = import.meta.glob('/src/contents/*.md', { eager: true });

    const path = `/src/contents/${data.slug}.md`;
    const mod = modules[path] as any;
    const Page = mod?.default;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>

	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.title} />
	<meta property="og:url" content={`https://Y0rFa1se.github.io/${data.slug}`} />

	<meta name="description" content={data.metadata.title} />
</svelte:head>

{#if Page}
    <main>
        <h1>{data.metadata.title}</h1>
        <p class="author">Last Edited: {data.metadata.lastModified}</p>
        <svelte:component this={Page} />
    </main>
{:else}
    <main>
        <p>Cannot find the post.</p>
    </main>
{/if}