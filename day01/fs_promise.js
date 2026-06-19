const fs = require("fs/promises")
const path = require("path")
const filename = "promise_crud.txt"
const dirname = __dirname
const filepath = path.join(__dirname , "text_files" , filename)

fs.writeFile(
    filepath ,
    "This is the intial text being written using the fs.promises.writefile()",
    "utf-8"
)
.then(() =>{
    console.log("File written successfully!")
})
.catch((err) => {
    console.error(err)
})

var readData = fs.readFile(filepath, "utf-8")
.then((data) =>{
    readFile = data
    console.log("Below is the data read by the readFile()")
    console.log(readFile)
})
.catch((err) => {
    console.error(err)
})