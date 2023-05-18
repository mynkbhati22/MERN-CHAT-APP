const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

module.exports = {
  Connect: async () => {
    try {
      const conn = await mongoose.connect(
        "mongodb+srv://thakur05500:QT73gKo20QugBJZr@chat-app-db.xkq2qat.mongodb.net/",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log(
        "DB connected on: mongodb+srv://thakur05500:QT73gKo20QugBJZr@chat-app-db.xkq2qat.mongodb.net/"
      );
    } catch (error) {
      console.log("There is no mongodb connection :", error);
    }
  },
};
