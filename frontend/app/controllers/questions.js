import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      getQuestionsForCurrentQuiz: function() {
         let store = this.get('store'),
            currentQId = store.get('currentQuizId');
         return store.query('question', {
            quiz_id: currentQId
         });
      },

      getResultForCurrentQuiz: function() {
         let store = this.get('store'),
            currentQId = store.get('currentQuizId');
         return store.queryRecord('result', {
            quiz_id: currentQId
         });
      },

      applyAnswer: function(answerId, callback) {
         let template = {
            data: {
               id: answerId,
               type: 'answer'
            }
         },
         toSendData = JSON.stringify(template);
         $.ajax({
            url: '/api/v1/answers',
            type: 'POST',
            data: toSendData,
            success: callback,
            dataType: 'json'
         });
      },

      close: function() {
         return this.send('closeQuestion');
      }
   }
});
