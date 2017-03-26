import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr(),
   pass: DS.attr(),
   userAnswers: Ember.computed('category', function() {
      return this.get('category.data.id');
   })
});
