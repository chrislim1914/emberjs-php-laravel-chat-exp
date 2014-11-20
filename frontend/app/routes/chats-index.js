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
				},
				seconds : 30
			}));
		}
		this.get('pollster').start();
		if (Em.isNone(this.get('waiter'))) {
			this.set('waiter', Pollster.create({
				onPoll: function() {
					self.doWait();
				},
				seconds : 1
			}));
		}
		this.get('waiter').start();
		controller.set('content', model);
	},
	model: function() {
		return this.store.find('chat');
	},
	deactivate: function() {
		this.get('pollster').stop();
		this.get('waiter').stop();
	},
	doWait: function() {
		var ctrl           = this.controllerFor('chats-index');
		var waitSeconds    = ctrl.get('waitSeconds');
		var currentSeconds = ctrl.get('currentSeconds');
		if (currentSeconds<waitSeconds) {
			currentSeconds++;
			ctrl.set('currentSeconds', currentSeconds);
		}
	},
	doPoll: function() {
		var ctrl = this.controllerFor('chats-index');
		if (ctrl.get('content.length')>150) {
			this.store.unloadAll('chat');
			ctrl.set('isPolling', false);
			this.store.find('chat');
			return;
		}
		if (ctrl.get('isPolling')) {
			return;
		} else {
			ctrl.set('isPolling', true);
			var firstObject = ctrl.get('arrangedContent.firstObject');
			this.store.find('chat', { pollDate : firstObject.get('created_at')}).then(function(chats) {
				ctrl.set('isPolling', false);
				console.log(chats);
			},function(reason) {
				ctrl.set('isPolling', false);
				console.log(reason);
			});
		}
	}
});
