const mongoose = require("mongoose");

async function connect() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect;
