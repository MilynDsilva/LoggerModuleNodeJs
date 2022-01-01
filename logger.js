var url = 'http://mylogger.io/log';

function loggg(message){
    //send http message
    console.log(message);
}

module.exports.logs = loggg;
//module.exports.endurl = url;