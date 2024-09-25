const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins (development only)
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("admin", (score) => {
        console.log(score);
        io.emit("score", score); 
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
