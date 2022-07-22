const connectDb = require("./mongodb");

const updateData = async () => {
  const data = await connectDb();

  let result = await data.updateOne(
    { name: "Nabaraj Dahal" },
    { $set: { name: "Kopila Dahal", age: 12, school: "Nepal Government" } }
  );
  if (result.modifiedCount) {
    console.log("Updated Successfully");
  } else {
    console.log("No Data Found");
  }
};
updateData();
