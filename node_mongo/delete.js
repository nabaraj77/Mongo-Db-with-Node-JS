const connectDb = require("./mongodb");

//Deleting Data
const deleteData = async () => {
  let data = await connectDb();
  let result = await data.deleteOne({ name: "Kopila Dahal" });
  console.log(result);
  if (result.deletedCount) {
    console.log("Data Deleted Successfully");
  } else {
    console.log("No Data found ");
  }
};

deleteData();
