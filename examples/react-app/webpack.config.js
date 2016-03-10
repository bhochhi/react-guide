module.exports = {
  context: __dirname + "/public",
  entry: {

    javascript: ["./core/core.js","./app.js"],
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
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
    },{ test: /\.css$/, loader: "css" },]
  }
};
