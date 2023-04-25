/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seatchoice-s3.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "www.kopis.or.kr",
      },
    ],
  },
};

module.exports = nextConfig;
