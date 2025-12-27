module.exports = {
  reactStrictMode: true,
  typescript: {
    strict: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    NEXT_PUBLIC_APP_NAME: 'LUMINA v2.0',
  },
};
