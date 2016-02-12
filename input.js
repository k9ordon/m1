if (Meteor.isClient) {
    Template.input.events({
        'submit .t-input': function(e) {
            e.preventDefault();
            console.log('submit', Session.get('input-value'));
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
        //         //document.querySelector('.t-input').style.position = 'fixed';
        //     },200);
        //
        //     setTimeout(function() {
        //         $('html,body').animate({
        //             scrollTop: $(".t-message:last").offset().top
        //         }, 'slow', function() {
        //                 document.querySelector('.t-input').style.position = 'fixed';
        //             }
        //         );
        //     },100);
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
    };

    Template.input.helpers({
        currentValue: function() {
            console.log('currentValue', Session.get('input-value'));
            return Session.get('input-value');
        }
    });
}
