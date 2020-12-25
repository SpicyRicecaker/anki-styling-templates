module.exports = {
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        native: true,
      },
    ],
    '@snowpack/plugin-typescript',
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    // src: '/',
    public: '/',
    src: '/dist',
  },
  alias: {
    /* ... */
  },
};
