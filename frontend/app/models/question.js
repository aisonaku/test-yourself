import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
   text: DS.attr(),
   answers: DS.attr(),
   answersLeft: Ember.computed('category', function() {
      let arr = this.get('answers.data').map((item, index) => {
         return {
            id: item.id,
            value: item.attributes.text
         };
      }).splice(0, 2);
      return arr;
   }),
   answersRight: Ember.computed('category', function() {
      let arr = this.get('answers.data').map((item, index) => {
         return {
            id: item.id,
            value: item.attributes.text
         };
      }).splice(2);
      return arr;
   })
});
