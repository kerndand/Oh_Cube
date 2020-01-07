// Setup
const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 3000, listen);

let host;
let port;

function listen() {
  host = server.address().address;
  port = server.address().port;
  console.log('Sever startet at: http://' + host + ':' + port);
}

app.use(express.static('public'));

// Socket Connection
let io = require("socket.io")(server);

const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
  console.log("Board is ready...");

  var led = new five.Led(13);
  led.blink(500);
  
  var gyro = new five.Gyro({
    controller: "MPU6050",
    sensitivity: 100  
  });

  io.sockets.on("connection", (socket) => {
    console.log("connected!");
    
    gyro.on("change", function() {
      let data = {
        x: gyro.x,
        y: gyro.y,
        z: gyro.z
      };
      console.log(data);
      socket.emit("data", gyro.rate);
    });

    // Handling disconnect
    socket.on("disconnect", () => {
      console.log("Client: " + socket.id + " disconnected");
    });
  });
});