import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compress: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default million.next(nextConfig);
