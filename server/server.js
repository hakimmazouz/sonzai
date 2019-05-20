const express = require('express')
const path = require('path');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const SocketController = require('./SocketController')

const app = express(),
	server = require('http').Server(app),
	config = require('../webpack.config.js'),
	compiler = webpack(config),
	devMiddleware = webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	}),
	hotMiddleWare = require('webpack-hot-middleware'),
	DIST_DIR = __dirname,
	HTML_FILE = path.join(DIST_DIR, 'index.html'),
	PORT = 3000;

const sockets = new SocketController(server)
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(devMiddleware);
app.use(hotMiddleWare(compiler));

app.get('/', (req, res) => {
	compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
		if (err) {
			return next(err)
		}
		res.set('content-type', 'text/html')
		res.send(result)
		res.end()
	})
})

server.listen(PORT, function () {
	console.log('Server started, listening on port '+PORT+'!\n');
});