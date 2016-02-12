if (Meteor.isClient) {
    Template.input.events({
        'submit form': function() {
            alert('yo!');
        }
    });
}
