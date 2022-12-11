// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on("click", function(event) {
      // var roomname = prompt('Name of new room', 'default_lobby');
      RoomsView.handleClick(event);
    });

    this.$select.change(function() {
      var selected = $('#selects option:selected').val();
      RoomsView.handleChange(selected);
    }
      // RoomsView.handleChange(selected);
    );
  },

  render: function() {
    this.$select.empty();
    for (var room in Rooms._data) {
      this.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    this.$select.append($('<option>', {value:roomname, text: roomname}));
  },

  handleChange: function(event) {
    Rooms.selectRoom(event);
    Messages.clearMessages();
    App.fetch();
  },

  handleClick: function(event) {
    var roomname = prompt('Name of new room', 'default_lobby');
    Rooms.add(roomname);
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
