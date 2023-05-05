const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
let url =process.env.MONGO_URL
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });
