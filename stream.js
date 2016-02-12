if (Meteor.isClient) {
    Template.stream.helpers({
        messages: function() {
            return Messages.find({}, {sort: {createdAt:-1}});
        }
    });
}
