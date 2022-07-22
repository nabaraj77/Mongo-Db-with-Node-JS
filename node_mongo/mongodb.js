//CONNECTING NODE JS TO MONGODB

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const database='confusion';
const client = new MongoClient(url);
const connectDb=async()=>{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('user')
}

module.exports=connectDb;