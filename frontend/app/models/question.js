import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
   text: DS.attr(),
   answers: DS.attr(),
   answersArray: Ember.computed('category', function() {
      let arr = this.get('answers.data').map(item => {
         return {
            id: item.id,
            value: item.attributes.text
         };
      });
      return arr;
   })
});
