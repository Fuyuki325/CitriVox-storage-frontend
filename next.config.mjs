/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.BASE_URL_WITHOUT_HTTPS}`
      }
    ]
  }
};

export default nextConfig;
