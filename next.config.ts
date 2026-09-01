import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath:
    process.env.GITHUB_ACTIONS === "true"
      ? "/visionaryfunnels-neumorphic"
      : undefined,
  assetPrefix:
    process.env.GITHUB_ACTIONS === "true"
      ? "/visionaryfunnels-neumorphic/"
      : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.GITHUB_ACTIONS === "true"
        ? "/visionaryfunnels-neumorphic"
        : "",
  },
};

export default nextConfig;
