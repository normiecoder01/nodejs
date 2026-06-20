const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('event',(methodName) =>{console.log(`Event emmited from ${methodName}`)})
function emitSomething(){
    emitter.emit('event','emitSomething')
}

emitSomething()