// event example

// var express = require('express');

// var app = express();

var events = require('events');

var eventEmitter = new events.EventEmitter();

function mainLoop() {
	console.log('Running application');
	eventEmitter.emit('ApplicationRun');

	console.log('Stopping application');
	eventEmitter.emit('ApplicationStop');

	console.log('Starting application');
	eventEmitter.emit('ApplicationBegin');

}

function onApplicationStart() {
	console.log('Handling Application Begin Event');
}

function onApplicationRun() {
	console.log('Handling Application Run Event');
}

function onApplicationStop() {
	console.log('Handling Application Stop Event');
}

eventEmitter.on('ApplicationRun', onApplicationRun);
eventEmitter.on('ApplicationBegin', onApplicationStart);
eventEmitter.on('ApplicationStop', onApplicationStop);

mainLoop();

// var port = 8080;
// app.listen(port);
// console.log('Listening on port ' + port);
