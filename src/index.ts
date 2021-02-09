import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Get success!");
});
app.listen(port, () => {
  console.log("Express server started on port: " + port);
});
