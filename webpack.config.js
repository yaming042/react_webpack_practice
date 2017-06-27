var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './App.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js?v=[hash]'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
      			exclude: /node_modules/,
				query: {
			        presets: ['es2015','react']
			      }
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
		],
	},	
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: './template/index.html',
			title: 'test title',
		}),
	],
}