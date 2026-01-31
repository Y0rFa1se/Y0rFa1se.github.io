import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

import rehypeKatex from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const rehypeFixImagePaths = () => {
    return (tree) => {
        const visit = (node) => {
            if (node.type === 'element' && node.tagName === 'img' && node.properties?.src) {
                const src = node.properties.src;
                if (!src.startsWith('/') && !src.startsWith('http')) {
                    node.properties.src = `/${src}`;
                }
            }
            if (node.children) {
                node.children.forEach(visit);
            }
        };
        visit(tree);
    };
};

const config = {
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.svx', '.md'],
            remarkPlugins: [remarkMath, remarkGfm],
            rehypePlugins: [
                rehypeFixImagePaths,
                rehypeKatex,
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: 'append',
                        properties: {
                            class: 'header-link',
                            ariaLabel: 'Permalink'
                        }
                    }
                ]
            ],
            smartypants: false
        })
    ],
    extensions: ['.svelte', '.svx', '.md'],
    kit: {
        adapter: adapter(),
        prerender: { entries: ['*'] }
    }
};

export default config;