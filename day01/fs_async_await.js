const fs = require("fs/promises")
const path = require("path")
const filename = "async_await_crud.txt"
const dirname = __dirname
const filepath = path.join(__dirname , "text_files" , filename)

const writeFileFunction = async () =>{
    try{
        await fs.writeFile(
            filepath , 
            "This is the initial data being written in the file using async and await version of fs.writeFile()",
            "utf-8"
        )
        console.log("File has been written successfully!")
    }
    catch (err){
        console.error(err)
    }
}
writeFileFunction()


