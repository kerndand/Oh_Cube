const SOCKET = io.connect("http://localhost:3000");
let gyro;

SOCKET.on("data", (data) => {
  console.log(data);
  gyro = data;


 document.getElementsByClassName('cube')[0].style.transform = 'rotateY(' + gyro.y + 'deg) rotateX(' + gyro.x +'deg)';
});

// window.addEventListener("deviceorientation", (e) => {
  // const beta = e.beta;
  // const gamma = e.gamma;
  
// document.getElementsByClassName('cube')[0].style.transform = 'rotateY(' + gamma*3 + 'deg) rotateX(' + beta*3 +'deg)';
// }, true);