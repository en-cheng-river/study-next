module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 860,
      exclude: [/node_modules/],
      unitToConvert: 'px',
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'rem',
      fontViewportUnit: 'rem',
      landscapeUnit: 'vw',
    },
  },
};
