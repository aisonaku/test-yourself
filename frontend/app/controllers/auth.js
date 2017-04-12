import Ember from 'ember';

export default Ember.Controller.extend({

   session: Ember.inject.service('session'),

   actions: {
      authenticate() {
         let { identification, password } = this.getProperties('identification', 'password');
         this.set('errorMessage', '');
         this.get('session').authenticate('authenticator:auther', identification, password).catch(reason => {
            this.set('errorMessage', reason.error || reason);
         });
      },

      clearMessage() {
         this.set('errorMessage', '');
      }
   }
});