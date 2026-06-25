const data = require('./../data/tasks.json')
const { readTasks, writeTasks } = require('./../services/fileWriting.service')
const { fetchAllTasks } = require('./../utils/db.util')
// const getAllTasks = async (req, res, next) => {
//     try {
//         const stringTasks = await readTasks()
//         const jsonTasks = JSON.parse(stringTasks)
//         data.tasks = jsonTasks.tasks
//         res.send(data.tasks)
//     } catch (err) {
//         next(err)
//     }
// }

// const getAllTasks = async (req , res , next) =>{
//     try{
//         const 

//     }
// }

const getTaskById = async function(req, res, next) {
    try {
        const id = req.params.id
        const stringTasks = await readTasks()
        const jsonTasks = JSON.parse(stringTasks)
        const task = jsonTasks.tasks.find((t) => String(t._id) === String(id))
        res.send(task || null)
    } catch (err) {
        next(err)
    }
}

const createTask = async function(req, res, next) {
    try {
        const task = req.body
        if (!task || Object.keys(task).length === 0) {
            return res.status(400).send('Task not found in the body')
        }
        var currentTaskId = data.current_id
        const stringTasks = await readTasks()
        const jsonTasks = JSON.parse(stringTasks)
        const newTask = {
            ...task,
            _id: (currentTaskId + 1) || Date.now()
        }


        jsonTasks.tasks.push(newTask)
        jsonTasks.current_id = currentTaskId + 1
        await writeTasks(jsonTasks)
        data.tasks = jsonTasks.tasks

        return res.status(201).send({ message: 'Task pushed successfully', task: newTask })
    } catch (err) {
        console.error(err)
        return res.status(500).send('There was a problem creating the task: ' + err.message)
    }
}

const deleteTask = async function(req, res, next) {
    try {
        const id = req.params.id
        const stringTasks = await readTasks()
        const jsonTasks = JSON.parse(stringTasks)
        jsonTasks.tasks = jsonTasks.tasks.filter((t) => String(t._id) !== String(id))
        await writeTasks(jsonTasks)
        data.tasks = jsonTasks.tasks
        res.send('Task deleted successfully')
    } catch (err) {
        next(err)
    }
}

const updateTask = async function(req, res, next) {
    try {
        const id = req.params.id
        const task = req.body
        const stringTasks = await readTasks()
        const jsonTasks = JSON.parse(stringTasks)
        const index = jsonTasks.tasks.findIndex((t) => String(t._id) === String(id))

        if (index === -1) {
            return res.status(404).send(`Task with the id: ${id} not found.`)
        }

        jsonTasks.tasks[index] = { ...jsonTasks.tasks[index], ...task }
        await writeTasks(jsonTasks)
        data.tasks = jsonTasks.tasks
        return res.send(jsonTasks.tasks[index])
    } catch (err) {
        next(err)
    }
}

module.exports = { getAllTasks, getTaskById, createTask, deleteTask, updateTask }

