/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out
  output: "export",
  // /services/ -> /services/index.html (works on any shared host / cPanel / Nginx)
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
