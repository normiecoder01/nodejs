const {getDb} = require('./../utils/db.util')
const {ObjectId} = require('mongodb');

const fetchAllTasks = async () => {
    const db = getDb();
    return await db.collection('tasks').find({}).toArray();
}

module.exports = fetchAllTasks
