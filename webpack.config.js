/**
 * Created by JimBarrows on 12/18/16.
 */

var debug   = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src"
	, devtool: debug ? "inline-sourcemap" : null
	, entry: ['./client.js']
	, module: {
		loaders: [
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/
			},
			{test: /\.json$/, loader: "json"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}]
	}
	, output: {
		path: __dirname, filename: "index.min.js"
	}
	, plugins: debug ? [] : [
				new webpack.optimize.DedupePlugin()
				, new webpack.optimize.OccurenceOrderPlugin()
				, new webpack.optimize.UglifyPlugin({mangle: false, sourcemap: false})
			]
	, devServer: {
		contentBase: "./"
		, hot: true
	}
};
