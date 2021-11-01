//var socket = require('socket.io')(8080);
const socket = io.connect('http://437ffb30cb31.ngrok.io');
// const messageForm = document.getElementById('send-container')
// const messageInput = document.getElementById('message-input')
server_status = document.getElementById('output');

socket.on('server-change', data =>{
    console.log(data);
    document.getElementById('output').innerHTML = data;
    x = document.getElementById('output').innerHTML
    if (x === "Server is On!") {
        console.log("running correctly")
        document.getElementById('output').style.backgroundColor = "green";
        }
        else{
          console.log(x);
          document.getElementById('output').style.backgroundColor = "red";
        }
});

// messageForm.addEventListener('submit', e => {
//     e.preventDefault()
//     const message = messageInput.value
//     socket.emit('send-chat-message', message)
//     messageInput.value = ''
// })