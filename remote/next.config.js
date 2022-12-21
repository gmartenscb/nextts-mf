const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'log'
    };

    config.plugins.push(
      new FederatedTypesPlugin({
        disableDownloadingRemoteTypes: true,
        federationConfig: {
          name: 'remote',
          filename: 'remoteEntry.js',
          exposes: {
            './RemoteButton': './components/RemoteButton'
          }
        }
      })
    );

    return config;
  }
}

module.exports = nextConfig
