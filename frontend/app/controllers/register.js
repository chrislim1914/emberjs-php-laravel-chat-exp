import Em from 'ember';

export default Em.ObjectController.extend({
	passwordRepeat: '',
	actions: {
		doRegister: function() {
			var self = this;
			if (Em.isEmpty(this.get('content.username'))) {
				alert('please insert username');
				return;
			}
			if (Em.isEmpty(this.get('content.email'))) {
				alert('please insert email');
				return;
			}
			if (Em.isEmpty(this.get('content.password'))) {
				alert('please insert password');
				return;
			}
			if (this.get('content.password')!=this.get('passwordRepeat')) {
				alert('repeated password must be identical');
				return;
			}
			this.get('content').save().then(function() {
				self.transitionToRoute('login');
			}, function(reason) {
				console.log('cannot register, try again!');
			});
		}
	}
});
