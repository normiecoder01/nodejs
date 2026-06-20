const EventEmitter = require('events')
const userEmitter = new EventEmitter()


const eventCounts = {
"user-login" : 0,
"user-purchase" : 0,
"profile-update" : 0,
"user-logout" : 0
}




userEmitter.on('user-login',(username) =>{
    console.log(`User ${username} has logged in!`)
    eventCounts["user-login"]++;
})

userEmitter.on('user-purchase',(username, item) =>{
    console.log(`User ${username} has purchased ${item}!`)
    eventCounts["user-purchase"]++;
})

userEmitter.on('profile-update',(username, detail) =>{
    console.log(`User ${username} has updated their ${detail}!`)
    eventCounts["profile-update"]++;
})

userEmitter.on('user-logout',(username) =>{
    console.log(`User ${username} has logged out!`)
    eventCounts["user-logout"]++;
})

userEmitter.on('emit-summary',() => {
    console.log(eventCounts)
})

userEmitter.emit('user-login','normiecoder')
userEmitter.emit('user-purchase','normiecoder','laptop')
userEmitter.emit('profile-update','normiecoder','email')
userEmitter.emit('user-logout','normiecoder')
userEmitter.emit('emit-summary')



