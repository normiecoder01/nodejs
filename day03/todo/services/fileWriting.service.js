const fs = require('fs/promises')
const path = require('path')

const filePath = path.join(__dirname , '..' , 'data' , 'tasks.json')

const readTasks = async () => {
    try{
      const stringTasks =   await fs.readFile(filePath, 'utf-8')
      console.log(stringTasks)
      return stringTasks
    }
    catch(err){
        res.send("Error reading tasks file")
    }

}
const writeTasks = async(tasks) =>{
    try{
        stringTasks = JSON.stringify(tasks)
        await fs.writeFile(filePath , stringTasks)
    }
    catch(err){
        res.send("There was some error in writing the task into the file")
    }
}
module.exports = {readTasks , writeTasks }
