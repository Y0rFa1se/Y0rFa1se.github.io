import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { stat } from 'node:fs/promises';
import path from 'node:path';

export const prerender = true;

const posts = import.meta.glob('/src/contents/*.md');

export const entries = () => {
  return Object.keys(posts).map((file) => {
    const slug = file.split('/').pop()!.replace(/\.md$/, '');
    return { slug };
  });
};

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  const filePath = `/src/contents/${slug}.md`;
  const loader = posts[filePath];

  if (!loader) {
    throw error(404, 'Not found');
  }

  const mod: any = await loader();

  const absPath = path.resolve('src/contents', `${slug}.md`);

  const stats = await stat(absPath);
  const lastModified = stats.mtime.toISOString().slice(0, 10);

  return {
    slug,
    metadata: {
      ...mod.metadata,
      lastModified
    }
  };
};
