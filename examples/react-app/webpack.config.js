module.exports = {
  context: __dirname + "/public",
  entry: {
    core: "./core/core.js",
    app: "./app.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  // watch:true,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
