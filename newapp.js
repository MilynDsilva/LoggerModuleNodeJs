//const newlogger = require('./newlogger'); //same folder
const EventEmitter = require('events');
// const emitter = new EventEmitter();



const Logger = require('./newlogger');
const logger = new Logger();
//reg emitter
emitter.on('messgaelogged',function(arg){
    console.log('listner called',arg);
});

logger.log('message-s');