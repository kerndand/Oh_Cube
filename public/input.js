const SOCKET = io.connect("http://localhost:3000");
var gyrox;

SOCKET.on("data", (data) => {
  console.log(data);
});
