const socket  = io('http://localhost:8000');
const sendMessage = document.getElementById('send-message');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

const name = prompt('what is your name :');
appendMessage('you joined')
socket.emit('new-user', name);

socket.on('chat-message', data =>{
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name =>{
    appendMessage(`${name} joinned`)
})


sendMessage.addEventListener('click',function(e){
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('message', message)
    messageInput.value = '';
});

function appendMessage(message){
    const li = document.createElement('li');
    li.innerHTML = message
    chatBox.appendChild(li);
}

