import Em from 'ember';

export default Em.Route.extend({
	model: function() {
		var str = localStorage.getItem('ember_simple_auth:session');
		if (!Em.isEmpty(str)) {
			var userId = JSON.parse(str).userId;
			return this.store.find('user', userId);
		} else {
			return null;
		}
	}
});
