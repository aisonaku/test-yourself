import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      filterAnswerByUser: function(userId=1) {
         if(userId !== '') {
            return this.get('store').query('user_answers', {
               user_id: 1
            });
         } 
      },
	  getResultForQuiz: function(userId=1) {
         return this.get('store').query('result', {
               user_id: 1
            });
      },
      getUser: function() {
		  logger.log("Hello");
		  currentQId = this.get('store').query('users', {
               id: 1
            });
			alert(currentQId);
         return currentQId;
      },
	  getQuiz: function(id) {
		  return this.get('store').query('quiz', {
               quiz_id: id
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
