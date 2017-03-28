import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
   value: DS.attr(),
   stringView: Ember.computed('value', function() {
      return this.get('value') + '%';
   })
});
