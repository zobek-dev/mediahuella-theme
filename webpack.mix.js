const mix = require('laravel-mix')

mix.sourceMaps(true, 'source-map')
  .js('src/js/main.js', 'assets/')
  .postCss('src/styles/main.css', 'assets', [
    require('tailwindcss')
  ])

