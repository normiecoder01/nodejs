const http = require("http")
const server = http.createServer((req , res) =>{
    if(req.url === "/"){
        res.setHeader("content-type","text/plain")
        res.write("This is the homepage.")
        res.end()
    }
    if(req.url === "/other-page"){
        res.setHeader("content-type","text/plain")
        res.write("This is another page.")
        res.end()
    }

})
const PORT = 3000
server.listen(PORT,() => {
    console.log("And all set. Server is up and running and listening on http://localhost:3000/")
})