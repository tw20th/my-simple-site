// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-simple-site",
  trailingSlash: true,
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
};

export default nextConfig;
