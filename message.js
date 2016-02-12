if (Meteor.isClient) {
    Template.message.helpers({
        owned: function() {
            return (this.username == Session.get('username'));
        }
    });
}
