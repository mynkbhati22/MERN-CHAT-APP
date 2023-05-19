const express = require("express");
const { Connect } = require("./config/db");
const dotenv = require("dotenv");
const router = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

require("./config/db");
Connect();
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO FROM THE SERVER !");
});

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

const port = parseInt(process.env.PORT) || 5003;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
