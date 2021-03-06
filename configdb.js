// anonyms function

/* 
while directly connecting we get error so we use
{
    useUnifiedTopology: true,
    useNewUriParser: true,
    useCreateIndex: true,
  }
*/
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    });
    console.log(`Mongodb Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
