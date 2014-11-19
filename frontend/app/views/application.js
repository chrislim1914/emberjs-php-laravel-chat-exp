import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		$(window).resize(function() {
			var height       = $(window).height();
			var tabBarHeight = $("#tabBarId").height();
			$("#mainSectionId").height(height-tabBarHeight);
		});
		$(window).trigger('resize');
	}
});
