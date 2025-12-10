import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root to avoid lockfile detection picking the monorepo root
    root: __dirname,
  },
};

export default nextConfig;
