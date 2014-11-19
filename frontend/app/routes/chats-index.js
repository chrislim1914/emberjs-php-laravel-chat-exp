import Em from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Pollster from 'frontend/objects/pollster';

export default Em.Route.extend(AuthenticatedRouteMixin, {
	polling : false,
	setupController: function (controller, model) {
		var self = this;
		if (Em.isNone(this.get('pollster'))) {
			this.set('pollster', Pollster.create({
				onPoll: function() {
					self.toggleProperty('polling');
					controller.set('polling', self.get('polling'));
					console.log('polling... '+self.get('polling'));
				}
			}));
		}
		this.get('pollster').start();
		controller.set('content', model);
	},
	model: function() {
		return this.store.find('chat');
	},
	deactivate: function() {
		this.get('pollster').stop();
	}
});
