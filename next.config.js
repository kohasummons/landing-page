/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
  BASE_URL: "http://moon.lemonraise.com/api",
  APP_ENV: "development",
  APP_STORAGE_TYPE: "window.sessionStorage"
}

module.exports = {nextConfig, env}
