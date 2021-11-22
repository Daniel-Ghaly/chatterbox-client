// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    var selectRoom = document.querySelector('#rooms select');
    selectRoom.addEventListener('change', RoomsView.handleChange);
    var buttonRoom = document.querySelector('#rooms button');
    buttonRoom.addEventListener('click', RoomsView.handleClick);
    // RoomsView.$select.change(roomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    $options = $('option');
    Parse.readAll(function(data) {
      var roomNameArr = [];
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var roomname = obj.roomname;
        if (roomNameArr.indexOf(roomname) === -1) {
          roomNameArr.push(roomname);
        }
      }
      for (var i = 0; i < roomNameArr.length; i++) {
        RoomsView.$select.append('<option value="' + roomNameArr[i] + '">' + roomNameArr[i] + '</option>');
      }
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    Parse.readAll(function(data) {
      MessagesView.$chats.empty();
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (obj.roomname === roomname || roomname === 'allrooms') {
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
          var template = MessageView.render(obj);
          MessagesView.$chats.append(template);
          var $usernames = $('.usernames');

        }
      }
    });

  },

  handleChange: function(event) {
    console.log(RoomsView.$select.val());
    var roomName = RoomsView.$select.val();
    RoomsView.renderRoom(roomName);

    // TODO: Handle a user selecting a different room.

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // add text field for room name
    // get value of text field
    // add it to dom as an option
    var $roomname = $('#addroom').val();
    RoomsView.$select.append('<option value="' + $roomname + '">' + $roomname + '</option>');
    $('#addroom').val('');
  }


};
