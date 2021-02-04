var socket = io();
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

function sendmessage(){
    var messagebody = {
        "body": document.getElementById("messagebox").value,
        "user" : "fuck",
        "date": new Date()
    }
    console.log(messagebody)
    socket.emit("message_send", messagebody)
};
socket.on("message_recv", data => {
    console.log(data);
    var message = document.createElement("div");
    message.innerHTML = `<p><small>${data["date"]}</small><b>${data["user"]}:</b> ${data["body"]}</p>`
    document.getElementById("messages").appendChild(message)

});