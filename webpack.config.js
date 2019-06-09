const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackDashboardPlugin = require('webpack-dashboard/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackNotifierPlugin = require('webpack-notifier');



module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		hmr: 'webpack-hot-middleware/client?reload=true',
		app: "./src/main.js"
	},
	resolve: {
		alias: {
			"three-examples": "three/examples/js",
			"@mojo": path.resolve(__dirname, '../src/mojo'),
			"@": path.resolve(__dirname, '../src')
		}
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		host: '0.0.0.0',
		hot: true,
		historyApiFallback: true,
		overlay: true,
		open: 'Google Chrome',
		useLocalIp: true,
		openPage: '/authorize',
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},
	plugins: [
		new WebpackNotifierPlugin({
			title: 'Sonzai Dev',
			contentImage: path.join(__dirname, 'logo.png')
		}),
		new CleanWebpackPlugin(['dist']),
		new WebpackDashboardPlugin(),
		new HtmlWebpackPlugin({
			title: 'Generate',
			template: 'src/templates/index.hbs'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: "[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(svg|jpg|png|gif|mp4|ttf|obj)$/,
				loader: 'file-loader'
			},
			{
				test: /\.(handlebars|hbs)$/,
				loader: "handlebars-loader"
			},
			{
				test: /three[\\\/]examples[\\\/]js/,
				loader: "imports-loader?THREE=three"
			}
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}

// module.exports = (env, argv) => {
// 	if (argv.mode === 'development') {
// 		config.devtool = 'source-map';
// 	}
// 	return config;
// };