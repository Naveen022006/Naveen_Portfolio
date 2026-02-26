/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Naveen_Portfolio",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
