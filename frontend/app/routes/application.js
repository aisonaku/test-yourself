import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
      openModal: function(modalName) {
         return this.render(modalName, {
            into: 'application',
            outlet: 'modals',
            lol: true,
            model: {
               lol: true
            }
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
