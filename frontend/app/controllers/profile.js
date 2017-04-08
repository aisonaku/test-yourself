import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      filterAnswerByUser: function(userId=1) {
         if(userId !== '') {
            return this.get('store').query('user_answer', {
               user_id: 1
            });
         } 
      },
	  getResultForQuiz: function() {
         let store = this.get('store'),
            currentQId = store.get('currentQuizId');
         return store.queryRecord('result', {
            quiz_id: currentQId
         });
      },
      getUser: function() {
		  currentQId = store.get('id');
         return this.get('store').query('user', {
               id: currentQId
            });
      },
	  filterByCategory: function(categoryId) {
         if(categoryId !== '') {
            return this.get('store').query('quiz', {
               category_id: categoryId
            });
         } else {
            return this.get('store').findAll('quiz');
         }
      },
      getAllCategoryes: function() {
         return this.get('store').findAll('quiz').then(data => {
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
