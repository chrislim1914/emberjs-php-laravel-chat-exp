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
					self.doPoll();
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
	},
	doPoll: function() {
		var ctrl = this.controllerFor('chats-index');
		if (ctrl.get('isPolling')) {
			return;
		} else {
			ctrl.set('isPolling', true);
			var firstObject = ctrl.get('arrangedContent.firstObject');
			this.store.find('chat', { pollDate : firstObject.get('created_at')}).then(function(chats) {
				ctrl.set('isPolling', false);
			},function(reason) {
				console.log(reason);
			});
		}
	}
});
