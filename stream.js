if (Meteor.isClient) {
    Template.stream.helpers({
        messages: function() {
            return [{
                name: 'Yoda',
                content: 'yolo'
            }, {
                name: 'Luke',
                content: 'bäm!'
            }];
        }
    });
}
