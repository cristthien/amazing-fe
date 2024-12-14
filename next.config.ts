import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.16.1.23", // Nếu đang chạy trên localhost
        port: "3000",
        pathname: "/images/**", // Đảm bảo rằng đây là đường dẫn chính xác
      },
      {
        protocol: "http",
        hostname: "172.16.1.23", // Địa chỉ IP chính xác
        port: "3000",
        pathname: "/public/images/**", // Đảm bảo rằng đây là đường dẫn chính xác
      },
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
