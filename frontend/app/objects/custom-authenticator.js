import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
	tokenEndpoint: 'http://localhost:8080/api/v1/auth',
	//tokenEndpoint: 'api/v1/auth',
	restore: function (data) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},
	authenticate: function(credentials) {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			Ember.$.ajax({
				url: _this.tokenEndpoint,
				type: 'POST',
				data: JSON.stringify({email: credentials.identification, password: credentials.password}),
				contentType: 'application/json'
			}).then(function(response) {
				Ember.run(function() {
					resolve({
						token: response['user'].remember_token,
						userId: response['user'].id
					});
				})
			}, function(xhr, status, error) {
				Ember.run(function() {
					reject(xhr.responseText);
				});
			});
		});
	},
	invalidate: function() {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve) {
			Ember.$.ajax({url: _this.tokenEndpoint, type: 'DELETE'}).always(function() {
				resolve();
			});
		});
	}
});