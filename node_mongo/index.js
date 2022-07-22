//DISPLAYING THE DATA OF MONGO DB or Reading Data of mongo DB
const connectDb = require("./mongodb");

const displayData = async () => {
  const data = await connectDb();

  const result = await data.find({}).toArray();
  console.log(result);
};
displayData();
