import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      filterByCategory: function(categoryId) {
         if(categoryId !== '') {
            return this.get('store').query('questionnairy', {
               categoryid: categoryId
            });
         } else {
            return this.get('store').findAll('questionnairy');
         }
      },
      getAllCategoryes: function() {
         return this.get('store').findAll('questionnairy').then(data => {
            let uniqObject = {};
            data.toArray().forEach(item => {
               uniqObject[item.get('categoryid')] = item.get('categorytitle');
            });
            return Object.keys(uniqObject).map(key => {
               return {
                  id: key,
                  title: uniqObject[key],
                  active: false
               };
            });
         });
      }
   }
});
