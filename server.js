var express = require('express');
var socket = require('socket.io');
const Discord = require('discord.js')

const bot = new Discord.Client();
const TOKEN = 'Your Own Token';

bot.login(TOKEN);
// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log("listenting to requests");
});


app.use(express.static("public"));

//Socket.io
var io = socket(server);
Server_Status = "Server is Off!"
io.on('connection', function(socket){
    console.log('new connection', socket.id);
    io.sockets.emit('server-change', Server_Status);
});
bot.on('message', msg => {
    if (msg.content === '!ServerOn') {
      msg.reply('Server is  running! Updating website');
      msg.channel.send('Server is now running!');
      Server_Status='Server is On!';
    }
    else if(msg.content === '!ServerOff')
    {
      msg.reply('Server is turning off! Updating website');
      msg.channel.send('Server is now off!');
      Server_Status='Server is Off!';
    }
    io.sockets.emit('server-change', Server_Status)
    console.log(Server_Status);
});
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

