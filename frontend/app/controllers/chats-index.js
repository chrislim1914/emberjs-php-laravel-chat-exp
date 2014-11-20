import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties : ['created_at'],
  sortAscending  : false,
  newMessage     : '',
  isPolling      : false,
  isWaiting      : false,
  isWaitingObserver : function() {
    if (this.get('isWaiting')) {
      this.set('currentSeconds', 0);
    }
  }.observes('isWaiting'),
  waitSeconds    : 30,
  currentSeconds : 30,
  currentSecondsObserver: function() {
    this.set('percent', this.get('currentSeconds')*100/this.get('waitSeconds'));
    if ((this.get('currentSeconds'))>=(this.get('waitSeconds'))) {
      this.set('isWaiting', false);
    }
  }.observes('currentSeconds'),
  percent        : 100,
  percentStyle   : function() {
    return "width:"+this.get('percent')+"%";
  }.property('percent'),
  waitingStyle   : function() {
    if (this.get('isWaiting')) {
      return "button small disabled";
    } else {
      return "button small";
    }
  }.property('isWaiting'),
  actions: {
    sendMessage: function() {
      var self = this;
      if (!this.get('isWaiting')) {
        if (!Ember.isEmpty(self.get('newMessage'))) {
          var str = localStorage.getItem('ember_simple_auth:session');
          if (!Em.isEmpty(str)) {
            var userId = JSON.parse(str).userId;
            this.store.find('user', userId).then(function(user) {
              self.store.createRecord('chat', {
                message : self.get('newMessage'),
                'user'  : user
              }).save().then(function() {
                self.set('newMessage', '');
                self.set('isWaiting', true);
              }, function() {
                alert('cannot save!');
              });
            });
          } else {
          }
        } else {
          alert('please insert text');
        }
      }
    }
  }
});
