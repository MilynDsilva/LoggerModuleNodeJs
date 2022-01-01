const EventEmitter = require('events'); //class
// const emitter = new EventEmitter();//object

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{

log(message){
    //send http message
    console.log(message);
    
    //raise an event
    this.emit('messagelogged',{id:1,url:'http://someurl'});
}}

module.exports = Logger;
//module.exports.endurl = url;