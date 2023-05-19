const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.set("strictQuery", false);
dotenv.config();

module.exports = {
  Connect: async () => {
    try {
      const conn = await mongoose.connect(process.env.MDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
    } catch (error) {
      console.log("There is no mongodb connection :", error);
    }
  },
};
