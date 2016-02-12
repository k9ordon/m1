Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
    Template.registerHelper('session',function(input){
        return Session.get(input);
    });

    Meteor.startup(function() {
        var usernameSeeds = ['yadda', 'yolo', 'raised fist'];
        var randomUsername = usernameSeeds[Math.floor(Math.random()*usernameSeeds.length)];
        Session.set('username', randomUsername);

        WebFontConfig = {
            google: {
                families: ['Hind+Siliguri:400,500,300,700,600:latin']
            }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
