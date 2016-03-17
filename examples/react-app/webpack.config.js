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
  modulesDirectories: ['./node_modules'],
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
      loader: "css"
    }]
  }
};
