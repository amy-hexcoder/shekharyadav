// next.config.mjs
import { withContentlayer } from 'next-contentlayer2';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
