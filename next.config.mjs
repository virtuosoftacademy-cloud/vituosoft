/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:"/virtuosoft.pk/virtuosoft",
  assetPrefix:"/virtuosoft.pk/virtuosoft",
  output:"standalone",
  images: {
    unoptimized: true
  },
  trailingSlash:true
};

export default nextConfig;