'use strict';

require('dotenv').config({path: '../.env'});
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const port = process.env.DB_PORT || $DB_PORT;
const inProduction = process.env.NODE_ENV === 'production';
const app = express();
const router = express.Router();

app.use(
	cors({
		origin: inProduction ? 'https://3ecologies-seedbank.com' : 'http://localhost:3000'
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

// Configure API routes
// var routes_path = './routes/api/';
// var api_routes = fs.readdirSync(routes_path);
// for (var i=1; i<api_routes.length; i++) {
// 	var route = api_routes[i].slice(0,-3);
// 	app.use('/api/' + route, require(routes_path + route));
// };

app.get('/', (req, res) => res.send('Hello World!'))
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/events", require("./routes/api/events"));

// if (inProduction) {
  app.use(express.static(path.join(__dirname, 'build')));
	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
// }

function start_connection() {
	const db = mysql.createConnection({
		host: process.env.DB_HOST || $DB_HOST,
	 	database: process.env.DB_NAME || $DB_NAME,
		user: process.env.DB_USER || $DB_USER,
		password: process.env.DB_PASSWORD || $DB_PASSWORD
	});

	db.connect(function(err) {
		if (err) throw err;
		console.log('Connected to database');
	})

	db.on('error', function(err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.log('Connection lost; restarting');
			start_connection();
		} else {
			throw err;
		}
	})
}

start_connection();

console.log(inProduction);
// app.get('/api/auth/verify', (req, res) => res.send('Hello from the backend'));

app.listen(port, () => console.log(`Listening on port ${port}`));
