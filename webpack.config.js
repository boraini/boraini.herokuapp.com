const path = require("path");
module.exports = {
  context: "./js-raw",
	entry: {
    feed: "feed.js",
    search: "search.js",
		blog: "blog.js"
	},
  output: {
    path: path.resolve(__dirname, "public/js"),
		filename: "[name].js"
	}
};
