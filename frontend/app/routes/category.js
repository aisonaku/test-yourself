import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let breakfast = { category_id: params.category_id };
		 this.transitionTo('category', breakfast);
		 
  }

	
});
