/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosted on Vercel: pages are still prerendered statically, and
  // /api/contact/ runs as a serverless function that emails enquiries.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
