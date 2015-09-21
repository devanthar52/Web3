$(function() {
  // open connection to faye
  client = new Faye.Client('http://localhost:8000/');

  subscribeChannel();

  $("#send_message").click(function() {
    // retrieve message from input field
    msg = $("#chat_text").val();
    $("#chat_text").val();


    // send the message over the wire
    publication = client.publish('/messages', {
      text: msg,
      user: $("#user_name").val()
    });

    // faye promise chain: when sent, then empty the chat box
    publication.then(function() {
      $("#chat_text").val("");
    });
  });

});


// subscribe to chat
subscribeChannel = function() {
  client.subscribe('/messages', function(msg) {
    // write chat output
    timestamp = new Date().toISOString().slice(11, 19);
    $("#chat_output ul").append($("<li>").text(timestamp + " " + msg.user + ": " + msg.text));
    console.log(msg);
  });
}
