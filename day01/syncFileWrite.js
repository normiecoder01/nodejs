const fs = require("fs")
const path = require("path")

console.log("The value of __dirname is ", __dirname, "\n")

const filename = "NewSyncFile.txt"
console.log("The value of filename ",filename, "\n")

const filepath = path.join(__dirname , filename)
console.log("The value of filapath after joining the dirname and filename using path.join() is ",filepath, "\n")


const writtenText = fs.writeFileSync(
    filepath,
    "This is the intial text in the file written using writeFileSync().",
    "utf8"
)
console.log("File writing successful \n")

const appendedData = fs.appendFileSync(filepath , "\nThis is the later appended text using appendFileSync()", "utf-8")
console.log("File appended successfully. (Hopefully)")

const readData = fs.readFileSync(filepath , 'utf-8')
console.log("Below is the data read by fs.readFileSync()\n")
console.log(readData)

const newFileName = "RenamedSyncFile.txt"
const newFilePath = path.join(__dirname , newFileName)
fs.renameSync(filepath , newFilePath)



// fs.unlinkSync(filepath)
// console.log (" ....and we have lost our dear file using unlinkSync()")