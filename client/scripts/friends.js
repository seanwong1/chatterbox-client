// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  toggleStatus: function(username) {
    if (!this._data[username]) {
      this._data[username] = true;
    } else {
      this._data[username] = false;
    }
  },

  addFriend: function(username) {
    if (!this._data[username]) {
      this.toggleStatus(username);
    } else {
      this.toggleStatus(username);
    }
  },

  getFriendStatus: function(username) {
    return (username in this._data) && this._data[username];
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};