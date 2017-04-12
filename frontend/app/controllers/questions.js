import Ember from 'ember';
const { RSVP: { Promise }, $ } = Ember;

export default Ember.Controller.extend({
   actions: {
      getQuestionsForCurrentQuiz: function() {
         let store = this.get('store'),
            currentItem = store.get('currentQuiz'),
            currentQId = currentItem.get('id'),
            isCompleted = currentItem.get('completed');
         if(isCompleted) {
            return Promise.resolve('qDone');
         } else {
            return store.query('question', {
               quiz_id: currentQId
            });
         }
      },

      getResultForCurrentQuiz: function() {
         let store = this.get('store'),
            currentQId = store.get('currentQuiz').get('id');
         return store.queryRecord('result', {
            quiz_id: currentQId
         });
      },

      deleteResultsForQuiz: function() {
         let store = this.get('store'),
            currentQId = store.get('currentQuiz').get('id');
         let constructedUrl = '/api/v1/results?quiz_id=' + currentQId;

         let callback = () => {
            this.send('closeQuestion');
            $('.tys-wrapper').removeClass('blured');
         }; 

         let confirmation = confirm('Вы уверены, что хотите удалить результаты по этому тесту?');
         if (confirmation) {
            $.ajax({
               url: constructedUrl,
               type: 'DELETE',
               success: callback
            });
         }
      },

      applyAnswer: function(answerId, callback) {
         let template = {
            data: {
               id: answerId,
               type: 'answer'
            }
         };
         $.ajax({
            url: '/api/v1/answers',
            type: 'POST',
            data: template,
            success: callback,
            dataType: 'json'
         });
      },

      close: function() {
         return this.send('closeQuestion');
      }
   }
});
