const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false

const prepareForDocker = {}
if (isGithubActions) {
  prepareForDocker.output = "standalone"
}

const nextConfig = {
  ...prepareForDocker,

  experimental: { appDir: true },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
