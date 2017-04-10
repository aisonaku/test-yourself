
import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
   created_at: DS.attr(),
   updated_at: DS.attr(),
   category: DS.attr(),
   user_id: Ember.computed('user', function() {
      return this.get('user.data.id');
   }),
   answer_id: Ember.computed('answer', function() {
      return this.get('answer.data.id');
   })
});
