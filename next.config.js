const withCss = require('@zeit/next-css');


module.exports = withCss({
  webpack(config) {
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
      });
    return config
  }});

// NEEDED??
// publicPath: './',
// outputPath: 'static/',
// ! SNAP SVG WEBPACK CONFIG
//  config.module.rules.push(
    //   {
    //     test: require.resolve('snapsvg/dist/snap.svg.js'),
    //     use: 'imports-loader?this=>window,fix=>module.exports=0',
    //   });
    // config.resolve.alias =  {
    //         ...(config.resolve.alias || {}),
    //         snapsvg: 'snapsvg/dist/snap.svg.js',
    //       }