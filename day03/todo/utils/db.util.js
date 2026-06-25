const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const dbName = 'todo';

let dbInstance = null
let clientInstance = null

const connectDb = async () =>{
    if(dbInstance) return dbInstance;
    try{
        clientInstance = MongoClient(url,{
            maxPoolSize : 50,
            minPoolSize : 10,
            connectTimeoutMS : 5000,
            socketTimeoutMS : 30000
        });

        await clientInstance.connect();
        console.log("Mongo Connection pool eastablished");
        dbInstance = clientInstance.db(dbName);
        return dbInstance;

    }
    catch(err){
       console.log("Data initializatin crashed.: ", err)
       process.exit(1);
    }
};
const getDb = () =>{
    if(!dbInstance){
        throw new error("Database not initialised, call connectDB() first.");
    }
    return dbInstance;

}

module.exports = { connectDb , getDb }

