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
    //Messages.addMessage
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    Friends.addFriend(event.target.textContent);
    // Friends.toggleStatus(event.target.textContent);
    // Friends._data.push(event.target.textContent);
    // console.log(Friends._data);
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }


};