<script lang="ts">
	const modules = import.meta.glob('/src/contents/*.md', { eager: true });

	type Node = { name: string; children: Map<string, Node>; slug?: string };
	const root: Node = { name: '__root__', children: new Map() };

	const fm = (m: any) => m?.metadata ?? m?.frontmatter ?? {};

	const slugFromPath = (p: string) => p.split('/').pop()!.replace(/\.md$/, '');

	function add(parts: string[], slug: string) {
		let cur = root;
		for (const p of parts) {
			if (!cur.children.has(p)) cur.children.set(p, { name: p, children: new Map() });
			cur = cur.children.get(p)!;
		}
		cur.slug = slug;
	}

	for (const [path, m] of Object.entries(modules)) {
		const cat = String(fm(m).category ?? '').trim();
		if (!cat) continue;

		add(
			cat
				.split('/')
				.map((s) => s.trim())
				.filter(Boolean),
			slugFromPath(path)
		);
	}

	const kids = (n: Node) => [...n.children.values()].sort((a, b) => a.name.localeCompare(b.name));
	const href = (slug: string) => `contents/${encodeURIComponent(slug)}`;
</script>

{#snippet render(n: Node)}
	<li>
		{#if n.children.size === 0}
			<a href={href(n.slug ?? n.name)}>{n.name}</a>
		{:else}
			<span>{n.name}</span>
			<ol>
				{#each kids(n) as c (c.name)}
					{@render render(c)}
				{/each}
			</ol>
		{/if}
	</li>
{/snippet}

<ol>
	{#each kids(root) as n (n.name)}
		{@render render(n)}
	{/each}
</ol>
