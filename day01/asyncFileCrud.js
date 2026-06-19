const fs = require("fs")
const path = require("path")
const filename = "async_crud.txt"
const dirname = __dirname
const pathname = path.join(__dirname , filename)

fs.writeFile(
    pathname , 
    "This is the initial text being written in the file using writeFile() ",
    "utf-8", 
    (err) =>{
        if(err){
            console.error(err)
        }
        else{
            console.log("file has been written successfully")
        }
    } 
)



fs.appendFile(
    pathname ,
    "\n This is the appended text using appendFile()",
    (err) =>{
        if(err){
            console.err(err);
        }
        else {
            console.log("file appended successfully!")
        }
    } 
)

var readData = fs.readFile(
    pathname,
    "utf-8",
    (err , data) =>{
        if(err){
            console.err(err)
        }
        else{
            readData = data
            console.log(readData)
        }
    }
)

fs.unlink(
    pathname,
    (err) =>{
        if(err){
            console.error(err)
        }
        else{
            console.log("R.I.P. async file")
        }
    }
)


