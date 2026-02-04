// Next.js config for Vercel/CI. Keep this file in plain JS so the platform
// always loads it (some environments may not pick up next.config.ts reliably).
const withPWA = require("next-pwa")

const runtimeCaching = [
  {
    urlPattern: /^https?:\/\/fonts\.googleapis\.com\/.*/i,
    handler: "StaleWhileRevalidate",
    options: { cacheName: "google-fonts-stylesheets" },
  },
  {
    urlPattern: /^https?:\/\/fonts\.gstatic\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "google-fonts-webfonts",
      expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 365 },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  {
    urlPattern: /^https?:\/\/[^/]+\/_next\/static\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static-chunks",
      expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  {
    urlPattern: /^\/_next\/image\?url=.+$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "next-image-optimizer",
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
    handler: "CacheFirst",
    options: {
      cacheName: "image-assets",
      expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  {
    urlPattern: /^https?:\/\/[^/]+\/api\/.*/i,
    handler: "NetworkFirst",
    method: "GET",
    options: {
      cacheName: "api-cache",
      networkTimeoutSeconds: 10,
      expiration: { maxEntries: 100, maxAgeSeconds: 60 * 5 },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel: don't fail the deployment on lint/type-only issues.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Prevent "workspace root" inference issues in subdir setups.
  outputFileTracingRoot: process.cwd(),
}

module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
})(nextConfig)

