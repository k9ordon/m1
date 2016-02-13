if (Meteor.isClient) {
    Template.input.events({
    });

    Template.input.helpers({
        state: function() {
            return Session.get('input-state');
        }
    });
}
