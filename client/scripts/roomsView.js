// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // populate room button with rooms on server
    // get rooms from server
    // iterate through each room on server and append it to select
    Parse.readAll(function(data) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var roomname = obj.roomname;
        // console.log($('option:contains(' + obj.roomname + ')'));
        $options = $('option');
        // document.querySelector('option');

        for (var i = 0; i < $options.length; i++) {
          if (!$options[i].includes(roomname)) {
            RoomsView.$select.append('<option value="' + obj.roomname + '">' + obj.roomname + '</option>');
          }
        }
      }
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
