import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Controller.extend({
   actions: {
      signup() {
         let { identification, password, checkPassword } = this.getProperties('identification', 'password', 'checkPassword');
         if((password && (password === checkPassword)) && identification) {
            let rawData = {
               name: identification,
               password: password,
               confirmation_password: password
            };
            return fetch('/api/v1/users/sign_up', {
               body: JSON.stringify(rawData),
               method: 'POST',
               headers: {
                  'accept': 'application/json',
                  'content-type': 'application/json'
               }
            }).then(response => {
               if(response.ok) {
                  response.json().then(json => {
                     if(json.auth_token) {
                        this.transitionToRoute('auth');
                     } else {
                        window.alert('TODO! REGISTRATION ERROR');
                     }
                  });
               } else {
                  window.alert('TODO! REGISTRATION ERROR');
               }
            });
         } else {
            window.alert('TODO! VALIDATION ERROR');
         }
      }
   }
});
