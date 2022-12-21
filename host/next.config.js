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
        disableTypeCompilation: true,
        federationConfig: {
          name: 'host',
          filename: 'remoteEntry.js',
          remotes: {
            remote: 'remote@http://localhost:3001/remoteEntry.js'
          }
        }
      })
    );

    return config;
  }
}

module.exports = nextConfig
