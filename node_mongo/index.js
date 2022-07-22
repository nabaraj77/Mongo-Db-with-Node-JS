//DISPLAYING THE DATA OF MONGO DB or Reading Data of mongo DB
const connectDb = require('./mongodb')

const main=async()=>{
    let data = await connectDb();
    
    data = await data.find({}).toArray();
    console.log(data);
}
main()