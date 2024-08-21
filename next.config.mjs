/** @type {import('next').NextConfig} */

// default deploy

const nextConfig = {
  reactStrictMode: true,
  output:'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;

//deploy to gitHubPages

// const isProd = process.env.NODE_ENV === 'production';

// export default {
//   basePath: isProd ? '/repository-name' : '',
//   assetPrefix: isProd ? '/repository-name/' : '',
// };