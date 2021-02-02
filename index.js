require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app     = express();
const PORT = process.env.PORT || 3000;
const http = require('http').createServer(app)
mongoose.connect('mongodb://localhost:27017/toko_online',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(e=>console.log('success connect')).catch(e=>console.log('cant not be connected'));
// const io = require('socket.io')(http, {
//     cors: {
//         origin: "http://127.0.0.1:5500"
//       }
// })
// let users = {

// };
// let messages = {

// };
// io.on('connection', socket => {

//     socket.on('new-user', name => {
//         users[socket.id] = name;
//         socket.broadcast.emit('user-connected', name);
//     })

//     socket.on('message', message =>{
//         socket.broadcast.emit('chat-message', {message, name: users[socket.id]})
//         messages[socket.id] = message;
//         console.log(messages);
//     })
// })

http.listen(PORT, () => {
    console.log(`Server started on : https://localhost:${PORT}`);
});