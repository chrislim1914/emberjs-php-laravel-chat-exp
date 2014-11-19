import Em from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Em.Controller.extend(LoginControllerMixin, {
	authenticator: 'authenticator:custom',
	actions: {
		authenticate: function() {
			var _this = this;
			this._super().then(null, function(message) {
				_this.set('errorMessage', message);
			});
		}
	}
})