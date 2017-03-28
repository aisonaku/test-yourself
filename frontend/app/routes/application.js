import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
      openQuestion: function(quizId) {
         this.get('store').set('currentQuizId', quizId);
         return this.render('questions', {
            into: 'application',
            outlet: 'questions'
         });
      },

      closeQuestion: function() {
         return this.disconnectOutlet({
            outlet: 'questions',
            parentView: 'application'
         });
      },

      closeModal: function() {
         return this.disconnectOutlet({
            outlet: 'modals',
            parentView: 'application'
         });
      }
   }
});
