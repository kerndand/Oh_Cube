var five = require('johnny-five');
var board = new five.Board({ port: "COM4" });

board.on('ready', function () {
    var gyro = new five.Gyro({
        pins: ["A0"],
        sensitivity: 0.67, // optional
        resolution: 4.88   // optional
    });
    gyro.on("change", function () {
        console.log("Hi");
        console.log(gyro.x);
    });


});




// window.addEventListener("deviceorientation", (e) => {
//     const beta = e.beta;
//     const gamma = e.gamma;




//     document.getElementsByClassName('cube')[0].style.transform = 'rotateY(' + gamma * 3 + 'deg) rotateX(' + beta * 3 + 'deg)';
// }, true);