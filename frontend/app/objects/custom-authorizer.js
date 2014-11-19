import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
	authorize: function(jqHXR, requestOptions) {
		if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
			jqHXR.setRequestHeader('X-Auth-Token', this.get('session.token'));
			jqHXR.setRequestHeader('X-User-Id', this.get('session.userId'));
		}
	}
});