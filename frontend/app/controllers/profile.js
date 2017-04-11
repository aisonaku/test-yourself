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
	  getResultForQuiz: function() {
         return this.get('store').findAll('result');
      },
	  getQuiz: function(id) {
		  return this.get('store').query('quiz', {
               quiz_id: id
            });
      }
   }
});
