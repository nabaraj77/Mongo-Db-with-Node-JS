const connectDb = require('./mongodb')
const insertData=async()=>{
   const db = await connectDb();
   const result = await db.insertOne(
       {
           name:'Ganga',
           email:'ganga@gmail.com'
       }
   )
  
   if(result.acknowledged){
       console.log('Data Inserted Successfully');
   }
}
insertData();