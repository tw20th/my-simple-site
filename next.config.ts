import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-simple-site", // サブディレクトリのパスをリポジトリ名に合わせる
  trailingSlash: true,
  output: "export", // 静的エクスポートを有効化
  distDir: "docs",  // 出力フォルダを 'docs' に指定
};

export default nextConfig;
