/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export"
  // basePath: isProd ? "/brightpathai-website" : "",
  // assetPrefix: isProd ? "/brightpathai-website/" : "",
};

export default nextConfig;
