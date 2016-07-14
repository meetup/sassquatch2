var path = require('path');

var ExtractPlugin = require('extract-text-webpack-plugin');

var PATH_ENTRY = path.resolve(__dirname, 'webpack.entry.js');
var PATH_BUNDLE_DEST = path.resolve(__dirname, 'docs', 'templates', 'bundle');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractPlugin.extract("css!sass")
			}
		]
	},

	debug: true,

	plugins: [
		new ExtractPlugin("sassquatch.css")
	],

	// webpack requires a js entry point
	// and bundle location
	entry: "./webpack.entry.js",
	output: {
		path: PATH_BUNDLE_DEST,
		filename: 'bundle.js'
	}
};
