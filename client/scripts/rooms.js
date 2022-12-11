// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},
  selectedRoom: null,

  add: function(roomname) {
    if (!this._data[roomname]) {
      this.selectRoom(roomname);
      this._data[roomname] = 'unselected';
    }
  },

  selectRoom: function(roomname) {
    this.selectedRoom = roomname;
  },

  getSelectedRoom: function() {
    return this.selectedRoom;
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};