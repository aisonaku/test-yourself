import Ember from 'ember';
const { $ } = Ember;

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
      },

      deleteResultsForQuiz: function(id) {
         if(confirm('Вы уверены, что хотите удалить результаты по этому тесту?')) {
            $.ajax({
               url: '/api/v1/results?quiz_id=' + id,
               type: 'DELETE',
               success: () => {
                  this.send('getResultForQuiz');
                  this.container.reset();
                  this.transitionToRoute('profile');
               }
            });
         }
      }
   }
});
