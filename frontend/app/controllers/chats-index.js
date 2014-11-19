import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties : ['created_at'],
  sortAscending  : false,
  newMessage     : '',
  actions: {
    sendMessage: function() {
      var self = this;
      var str = localStorage.getItem('ember_simple_auth:session');
      if (!Em.isEmpty(str)) {
        var userId = JSON.parse(str).userId;
        this.store.find('user', userId).then(function(user) {
          self.store.createRecord('chat', {
            message : self.get('newMessage'),
            'user'  : user
          }).save().then(function() {
            self.set('newMessage', '');
          }, function() {
            alert('cannot save!');
          });
        });
      } else {
      }
    }
  }
});
