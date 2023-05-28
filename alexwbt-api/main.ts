import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

let data = "";
const SIZE_LIMIT = 1000;

app.use(cors());
app.use(bodyParser.text());

app.get("/message", (_, res) => {
  res.send(data);
});

app.post("/message", (req, res) => {
  const reqBody = `${req.body}`;

  data = (
    reqBody.length > SIZE_LIMIT
      ? reqBody : data + reqBody
  ).slice(-SIZE_LIMIT);

  res.send(data);
});

app.listen(3000);
