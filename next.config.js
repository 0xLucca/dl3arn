/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["picsum.photos", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
