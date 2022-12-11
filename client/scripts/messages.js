// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  addMessage: function(message) {
    this._data.push(message);
  },

  getLength: function() {
    return this._data.length;
  },

  getMessage: function(index) {
    return this._data[index];
  },

  clearMessages: function() {
    this._data = [];
  }
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};