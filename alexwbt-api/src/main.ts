import { PrismaClient } from '@prisma/client';
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

configDotenv();

const app = express();
const httpServer = createServer(app);
const socketIO = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

socketIO.on("connection", socket => {
  socket.on("message-bus", data => {
    socketIO.emit("message-bus", data);
  });
});


app.use(cors());
app.use(bodyParser.text());

const prisma = new PrismaClient();
app.post("/message", async (req, res) => {
  await prisma.anonMessage.create({
    data: {
      message: `${req.body}`,
    },
  });

  res.status(200).end();
});

httpServer.listen(3000, () => console.log("Listening on port: 3000"));
