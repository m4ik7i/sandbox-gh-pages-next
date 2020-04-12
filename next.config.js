const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  env: {
    BACKEND_URL: !debug ? '/sandbox-gh-pages-next' : '',
  },
  assetPrefix: !debug ? '/sandbox-gh-pages-next/' : '',
  devIndicators: {
    autoPrerender: false,
  },
};
