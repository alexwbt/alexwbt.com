import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { PrismaClient } from '@prisma/client'

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.text());

app.post("/message", async (req, res) => {
  await prisma.message.create({
    data: {
      message: `${req.body}`
    }
  });

  res.sendStatus(200);
});

app.listen(3000);
