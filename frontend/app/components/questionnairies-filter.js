import Ember from 'ember';

export default Ember.Component.extend({
   init: function() {
      this._super(...arguments);
      this.get('filter')('').then((results) => {
         return this.set('results', results);
      });
      this.get('categoryes')().then(res => {
         return this.set('categoryes', res);
      });
   },
   actions: {
      setCategory: function(category) {
         let filterAction = this.get('filter'),
            categoryes = this.get('categoryes');
         categoryes.forEach(item => {
            if(item.id === category) {
               Ember.set(item, 'active', true);
            } else {
               Ember.set(item, 'active', false);
            }
         });
         filterAction(category).then((filterResults) => this.set('results', filterResults));
      }
   }
});
