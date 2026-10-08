import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешаем внешние картинки с picsum.photos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
