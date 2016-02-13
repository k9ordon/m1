if (Meteor.isClient) {
    Template.input.events({
        'submit .t-input': function(e) {
            e.preventDefault();
            console.log('submit', Session.get('input-value'), Session.get('input-mode'));

            var inputMode = Session.get('input-mode'),
                inputValue = Session.get('input-value');

            if (inputMode === "message") {
                Messages.insert({
                    text: Session.get('input-value'),
                    createdAt: new Date(),
                    username: Session.get('username')
                });

                $('.t-input-input').val('');
            } else if (inputMode === "directmessage") {
                alert('set to direct message mode');
            } else if (inputMode === "channel") {
                alert('set to channel mode');
            }
        },
        'keyup .t-input-input': function(e) {
            console.log('i changed', e.target.value);

            Session.set('input-value', e.target.value);

            Template.input.processMessage(e.target.value);
        },
        // 'focus .t-input-input': function() {
        //     setTimeout(function() {
        //         window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
        //     }, 0);
        // }
        // 'focus .t-input-input': function() {
        //     setTimeout(function() {
        //         document.querySelector('.t-input').style.position = 'absolute';
        //     },0);
        //     setTimeout(function() {
        //         document.querySelector('.t-input').style.position = 'fixed';
        //     },100);
        //
        //     // setTimeout(function() {
        //     //     $('html,body').animate({
        //     //         scrollTop: $(".t-message:last").offset().top
        //     //     }, 'slow', function() {
        //     //             document.querySelector('.t-input').style.position = 'fixed';
        //     //         }
        //     //     );
        //     // },100);
        //
        //
        //
        // },
        // 'blur .t-input-input': function() {
        //     document.querySelector('.t-input').style.position = 'fixed';
        // }
    });

    Template.input.processMessage = function(message) {
        console.log('processMessage', message, this);

        var inputState = {};

        inputState.channels = (message.match(/(^#|\s#)([a-z0-9]+)/gi) || []).map(function(channel) {
            return channel.trim();
        });
        inputState.usernames = (message.match(/(^@|\s@)([a-z0-9]+)/gi) || []).map(function(tag) {
            return tag.trim();
        });

        if (message.startsWith('@')) {
            inputState.mode = 'directmessage';
        } else if (message.startsWith('#')) {
            inputState.mode = 'channelmessage';
        } else {
            inputState.mode = 'status';
        }

        Session.set('input-state', inputState);
    };

    Template.input.helpers({
        state: function() {
            return Session.get('input-state');
        }
    });
}
