const logger = require('./logger'); //same folder
const nlogger = require('./nlog');
const path = require('path'); //built in module - node.js docs /
const os = require('os');
const fs = require('fs');//file system



var pathObj = path.parse(__filename);

var totalmem = os.totalmem();
var freemem = os.freemem();

console.log('Total mem is '+totalmem+ 'and free memory is '+freemem);
console.log(`total mem ${totalmem} and free mem ${freemem}`);//template string

console.log(pathObj);

//avoid acess sync / sync -- used for simplicity 
//use async for non blocking -- we have thousands of clients connectingto  same service , cant keep thread busy
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log('Error'+err);
    else console.log('Files'+files);
});

//for parent ../path or for sub ./sub/folder
//console.log(logger);

logger.logs("message!");//obj exported was used
nlogger("hello there");//no obj exported


//console.log(module);


// var sayHello = function(){

// }
// window.sayHello();
//js hint == for checkig errors
//jshint app.js