import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	value: DS.attr(),
   created_at: DS.attr(),
   updated_at: DS.attr(),
   category: DS.attr(),
   user_id: Ember.computed('user', function() {
      return this.get('user.data.id');
   }),
   quiz_id: Ember.computed('quiz', function() {
      return this.get('quiz.data.id');
   }), 
   stringView: Ember.computed('value', function() { 
      return this.get('value') + '%';
   }),
   quiz: DS.attr(),
   title: Ember.computed('quiz', function() {
      return this.get('quiz.data.attributes.title');
   })
});
