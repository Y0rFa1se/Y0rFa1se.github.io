import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const posts = import.meta.glob("/src/contents/*.md");

export const entries = () => {
  return Object.keys(posts).map((file) => {
    const slug = file.split('/').pop()!.replace(/\.md$/, '');
    return { slug };
  });
};

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const path = `/src/contents/${slug}.md`;

  const loader = posts[path];
  if (!loader) {
    throw error(404, 'Not found');
  }

  const mod: any = await loader();

  return {
    slug,
    metadata: mod.metadata ?? {}
  };
};