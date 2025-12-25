import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/i18n",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
