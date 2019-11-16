const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://tindev-omnistack:tindevomnistack@cluster0-tbgk9.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

const port = 3333

server.listen(port, () => {
	console.log("Server running on http://localhost:", port);
});
