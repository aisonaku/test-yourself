import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
   title: DS.attr(),
   description: DS.attr(),
   category: DS.attr(),
   completed: DS.attr(),
   categoryid: Ember.computed('category', function() {
      return this.get('category.data.id');
   }),
   categorytitle: Ember.computed('category', function() {
      return this.get('category.data.attributes.title');
   })
});
