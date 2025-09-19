import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <-- this makes it export as static HTML
  images: {
    unoptimized: true, // needed for GitHub Pages
  },
  basePath: '/project002', // <-- use your repo name here
  assetPrefix: "/project002/", // <-- Add this for correct asset paths
};

export default nextConfig;