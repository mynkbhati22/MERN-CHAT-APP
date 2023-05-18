const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM THE SERVER !");
});

const port = parseInt(process.env.PORT) || 5003;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
