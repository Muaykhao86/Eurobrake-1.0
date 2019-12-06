const withCss = require('@zeit/next-css')


module.exports = withCss({
  webpack (config) {
    config.module.rules.push(
    {
      test: /\.(png|jpg|gif|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    },
    {
      test: require.resolve('snapsvg'),
      loader: 'imports-loader?this=>window,fix=>module.exports=0'
    });
    return config
  }
});

// NEEDED??
// publicPath: './',
// outputPath: 'static/',