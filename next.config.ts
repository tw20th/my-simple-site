// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-simple-site", // リポジトリ名に合わせたサブディレクトリのパス
  trailingSlash: true,         // 各ページをフォルダとしてエクスポート
  output: "export",             // 静的エクスポートを有効化
  distDir: "docs",              // 出力フォルダを docs に指定
  images: {
    unoptimized: true,          // 画像最適化を無効化
  },
};

export default nextConfig;
