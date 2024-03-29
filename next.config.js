const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
module.exports = withSvgr({
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({ test: /.md$/, use: 'raw-loader' });
    return config;
  },
});
