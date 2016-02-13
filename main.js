Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
    Template.registerHelper('session',function(input){
        return Session.get(input);
    });

    Meteor.startup(function() {
        var usernameSeeds = ['yadda', 'yolo', 'raised fist'];
        var randomUsername = usernameSeeds[Math.floor(Math.random()*usernameSeeds.length)];
        Session.set('username', randomUsername);
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
