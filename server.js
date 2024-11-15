const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const ngrok = require("ngrok");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
var current;

app.use(
  "/socket.io",
  express.static(__dirname + "/node_modules/socket.io-client/dist/")
);

app.use(express.static(__dirname + "/public"));

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index2.html");
});

io.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");

  // 클라이언트로부터 스트림을 수신하면 모든 연결된 클라이언트에게 스트림을 전송합니다.
  socket.on("frame", (frame) => {
    current = frame;
    socket.emit("frame");
  });

  socket.on("image", () => {
    socket.emit("image", current);
  });
});

server.listen(80, () => {
  console.log("서버가 3000 포트에서 실행 중입니다.");
  ngrok.connect(80).then((url) => {
    console.log(`Ngrok tunnel is active at ${url}`);
  });
});
