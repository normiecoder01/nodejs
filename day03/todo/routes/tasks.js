const express = require('express')
const {getAllTasks , getTaskById , createTask , deleteTask , updateTask} = require('./../controllers/task.controller')
const router = express.Router()

router.use(express.json());

router.get('/', getAllTasks)

router.get('/:id' , getTaskById)

router.post('/create_task/', createTask)

router.get('/delete_task/:id', deleteTask)

router.post('/update_task/:id' , updateTask)

module.exports = router;
