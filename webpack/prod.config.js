const { merge } = require('webpack-merge');
const commonConfig = require('./common.config');

// This variable should mirror the one from config/settings/production.py
const staticUrl = `https://${process.env.DJANGO_AZURE_ACCOUNT_NAME}.blob.core.windows.net/static/`;

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  bail: true,
  output: {
    publicPath: `${staticUrl}webpack_bundles/`,
  },
});
