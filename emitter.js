const EventEmitter = require('events'); //class


const emitter = new EventEmitter();//object

//emitter.addListener
//same \/
// emitter.on('messagelogged',function(arg){ //e
//     console.log('Listner called',arg);
// });


emitter.on('messagelogged',arg => //e
    console.log('Listner called',arg));

//raised an event , needs a listner ;
emitter.emit('messagelogged',{id:1, url:'http://'}); // order matters , calls only above ones

//emit = make noise , prodeuce something , event has taken place 
