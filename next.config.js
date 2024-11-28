/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "lovely-flamingo-139.convex.cloud",
      "imgs.search.brave.com",
      "beaming-gecko-940.convex.cloud",
      "img.clerk.com",
    ],
  },
};

module.exports = nextConfig;
