// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: false },
    author: { type: 'string', required: false },
    featured: { type: 'boolean', required: false, default: false},
    readTime: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: false },
    published: { type: 'boolean', default: true, required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.mdx?$/, '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['heading-anchor'] } }],
    ],
  },
});
