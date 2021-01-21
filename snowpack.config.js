module.exports = {
  plugins: [
    // This array consists of the sass plugin config
    [
      // Allows snowpack to compile sass files
      '@snowpack/plugin-sass',
      {
        // Calls on native dart-sass installation in systeminstead of pure javascript sass
        native: true,
      },
    ],
    // Allows snowpack to compile typescript files
    '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    // Maps public to '/' path on server
    public: '/',
    // Maps src to '/dist' path on server, after running all plugins
    // e.g. scss becomes css, ts becomes js
    // Just run `snowpack build` to have a better idea of what snowpack strucc
    src: '/dist',
  },
  alias: {
    /* ... */
  },
};
