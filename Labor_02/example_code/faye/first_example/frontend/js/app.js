$(function() {
  // open connection to faye
  client = new Faye.Client('http://localhost:8080/');

  subscribeChannel();
});


// subscribe to chat
subscribeChannel = function() {
  client.subscribe('/messages', function(msg) {
    $("#chat_output ul").append($("<li>").text(msg.text));
    console.log(msg);
  });
}
