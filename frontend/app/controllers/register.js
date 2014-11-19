import Em from 'ember';

export default Em.ObjectController.extend({
	actions: {
		doRegister: function() {
			var self = this;
			this.get('content').save().then(function() {
				self.transitionToRoute('login');
			}, function(reason) {
				console.log('cannot register, try again!');
			});
		}
	}
});
