import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
   actions: {
      openQuestion: function(quiz) {
         this.get('store').set('currentQuiz', quiz);
         return this.render('questions', {
            into: 'application',
            outlet: 'questions'
         });
      },

      closeQuestion: function() {
         return this.get('store').findAll('quiz').then(() => {
            return this.disconnectOutlet({
               outlet: 'questions',
               parentView: 'application'
            });
         }.bind(this));
      },

      closeModal: function() {
         return this.disconnectOutlet({
            outlet: 'modals',
            parentView: 'application'
         });
      }
   }
});
