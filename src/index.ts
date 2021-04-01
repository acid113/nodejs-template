import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  const date = new Date();
  res.status(200).send({
    message: date.toISOString(),
  });
});
app.listen(port, () => {
  console.log("Express server started on port: " + port);
});
