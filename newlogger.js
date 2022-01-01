const EventEmitter = require('events'); //class
const emitter = new EventEmitter();//object

var url = 'http://mylogger.io/log';

function log(message){
    //send http message
    console.log(message);
}

module.exports = log;
//module.exports.endurl = url;