const production = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: [
    require('postcss-easy-import', {
      prefix: '_'
    }),
    require('tailwindcss')('tailwind.config.js'),
    require('precss')({
      unresolved: 'ignore'
    }),
    require('autoprefixer'),
    // Only purge / clean on production
    production &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.svelte'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }),
    production && require('postcss-clean')
  ]
}
