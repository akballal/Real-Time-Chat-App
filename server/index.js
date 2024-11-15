const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("Join_room", (data) => {
    console.log(`User with Id: ${socket.id} joined a room: ${data}`);
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    console.log("Data while sending -> ", data)
    socket.to(data.room).emit("receive_message", data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Srever Running");
});
