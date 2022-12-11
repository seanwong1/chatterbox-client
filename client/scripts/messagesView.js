// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    $(document).on("click", ".username", function(event) {
      MessagesView.handleClick(event);
    });
  },

  render: function() {
    this.$chats.empty();
    for (var i = 0; i < Messages.getLength(); i++) {
      this.renderMessage(i);
    }
  },

  renderMessage: function(index) {

    if (Messages.getMessage(index)['roomname'] === Rooms.getSelectedRoom()) {
      if (Friends.getFriendStatus(Messages.getMessage(index)['username'])) {
        this.$chats.append(MessageView.render(Messages.getMessage(index)));
        $(`div:contains(${Messages.getMessage(index)['username']})`).css({'background-color': 'red'});
      } else {
        this.$chats.append(MessageView.render(Messages.getMessage(index)));
      }
    }

  },

  handleClick: function(event) {
    Friends.addFriend(event.target.textContent);
    // Friends.toggleStatus(event.target.textContent);
    // Friends._data.push(event.target.textContent);
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};