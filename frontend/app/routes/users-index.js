import Em from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Em.Route.extend(AuthenticatedRouteMixin, RouteMixin, {
	perPage: 10,
	model: function(params) {
		return this.findPages('user', params);
	}
});