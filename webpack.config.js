const path = require("path");
module.exports = {
  context: path.resolve(__dirname, "js-raw/"),
	entry: {
    feed: "./feed.js",
    search: "./search.js",
		blog: "./blog.js"
	},
  output: {
    path: path.resolve(__dirname, "public/js/"),
		filename: "[name].js"
	},
	module: {
         rules: [
             {
                 test: /\.js$/,
                 use: ['babel-loader'],
								 exclude: "/node_modules/"
             }
         ]
  },
  stats: {
         colors: true
  },
  devtool: 'source-map'
};
