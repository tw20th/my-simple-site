// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-simple-site", // リポジトリ名と一致するbasePath
  trailingSlash: true,         // URLの末尾にスラッシュを追加
  output: "export",             // 静的エクスポートを有効化
  distDir: "docs",              // 出力先をdocsフォルダに指定（GitHub Pages用）
  images: {
    unoptimized: true,          // 画像最適化を無効化
  },
};

export default nextConfig;
