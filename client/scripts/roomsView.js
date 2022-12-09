// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on("click", function(event) {
      RoomsView.handleClick(event);
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    var option = document.createElement('option');
    option.text = roomname;
    this.$select.append(option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    Rooms.add(event);
    // TODO: Handle the user clicking the "Add Room" button.
    console.log(event);
  }

};
