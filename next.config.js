/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GA_ID: process.env.GA_TRACKING_ID,
  },
};
