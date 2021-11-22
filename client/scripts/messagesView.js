// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    var $usernames = $('.usernames');
    // var $friends = $('#friends');
    var friendsArr = [];
    MessagesView.$chats.on( 'click', '.username', function( event ) {
      console.log($(event.target).text());
      var $friends = $('#friends');
      if (friendsArr.length === 0 ) {
        friendsArr.push($(event.target).text());
        $friends.append('<li>' + friendsArr[0] + '</li> ');
      }
      for (var i = 0; i < $friends.children().length; i++) {
        if (friendsArr.indexOf($(event.target).text()) === -1) {
          friendsArr.push($(event.target).text());
          $friends.append('<li>' + $(event.target).text() + '</li> ');
        }
      }
      // for (var i = 0; i < friendsArr.length; i++) {

      // }
    });

  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');
    Parse.readAll(function(data) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        data[i].text = String(data[i].text).replaceAll('<', '&lt;');
        data[i].text = String(data[i].text).replaceAll('&', '&amp;');
        data[i].text = String(data[i].text).replaceAll('>', '%gt;');
        data[i].text = String(data[i].text).replaceAll('"', '&quot;');
        data[i].text = String(data[i].text).replaceAll('\'', '&#x27;');
        data[i].username = String(data[i].username).replaceAll('<', '&lt;');
        data[i].username = String(data[i].username).replaceAll('&', '&amp;');
        data[i].username = String(data[i].username).replaceAll('>', '%gt;');
        data[i].username = String(data[i].username).replaceAll('"', '&quot;');
        data[i].username = String(data[i].username).replaceAll('\'', '&#x27;');
        data[i].roomname = String(data[i].roomname).replaceAll('<', '&lt;');
        data[i].roomname = String(data[i].roomname).replaceAll('&', '&amp;');
        data[i].roomname = String(data[i].roomname).replaceAll('>', '%gt;');
        data[i].roomname = String(data[i].roomname).replaceAll('"', '&quot;');
        data[i].roomname = String(data[i].roomname).replaceAll('\'', '&#x27;');
        var $friends = $('#friends');
        var alreadyRendered = false;
        console.log($friends.children().length);
        for (var j = 0; j < $friends.children().length; j++) {
          if (data[i].username === $friends.children()[j].textContent) {
            var template = MessageView.renderFriend(obj);
            MessagesView.$chats.append(template);
            alreadyRendered = true;
          }
        }
        if (!alreadyRendered) {
          var template = MessageView.render(obj);
          MessagesView.$chats.append(template);
        }
      }
    });
  },
  renderMessage: function(message) {
    // TODO: Render a single message.
    var template = MessageView.render(message[0]);
    MessagesView.$chats.prepend(template);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};