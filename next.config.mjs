/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:"https://virtuosoft.pk/virtuosoft",
  assetPrefix:"https://virtuosoft.pk/virtuosoft/",
  output:"standalone",
  images: {
    unoptimized: true
  },
  trailingSlash:true
};

export default nextConfig;