const mongoose = require("mongoose");
// anonyms function

/* 
while directly connecting we get error so we use
{
    useUnifiedTopology: true,
    useNewUriParser: true,
    useCreateIndex: true,
  }
*/
const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUriParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDb Connected ${con.connection.host}`);
  } catch (error) {
    console.error(`Error : ${(error, message)}`);
    // if connection not establish or fail then exit 
    process.exit(1);
  }
};

module.exports = connectDb;
