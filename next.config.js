const withMDX = require('@next/mdx')
const images = require('remark-images')
const withPlugins = require('next-compose-plugins')
const path = require('path')

const nextConfig = {
  webpack5: true,
  cleanUrls: true,
  trailingSlash: false,

  env: {
    'GRAPHCMS_URL': process.env.GRAPHCMS_URL,
    'GRAPHCMS_TOKEN': process.env.GRAPHCMS_TOKEN,
    'UMAMI_HOST': process.env.UMAMI_HOST,
    'UMAMI_WEBSITE_ID': process.env.UMAMI_WEBSITE_ID,
  },

  webpack: (config, {_buildId, dev, isServer}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styling/base': path.resolve(__dirname, './src/styles/module-base.scss'),
    }

    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      })
    }

    config.experiments = {topLevelAwait: true}

    return config
  },
}

const mdxConfig = {
  pageExtensions: ['md', 'mdx'],
  options: {
    remarkPlugins: [images],
  },
}

module.exports = withPlugins([
  [withMDX, mdxConfig],
], nextConfig)
