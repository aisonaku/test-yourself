import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Controller.extend({
   actions: {
      signup() {
         let { identification, password, checkPassword } = this.getProperties('identification', 'password', 'checkPassword');
         this.set('errorMessage', '');
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
                        this.set('errorMessage', 'Непредвиденная ошибка');
                     }
                  });
               } else {
                  this.set('errorMessage', 'Имя пользователя занято');
               }
            }).catch(reason => {
               this.set('errorMessage', reason.error || reason);
            });
         } else {
            if(!identification && !password) {
               this.set('errorMessage', 'Введите имя пользователя и пароль');
            } else if(identification && (!password || !checkPassword)) {
               this.set('errorMessage', 'Введите пароль');
            } else if(identification && password) {
               this.set('errorMessage', 'Введеные пароли не совпадают');
            }
         }
      },

      clearMessage() {
         this.set('errorMessage', '');
      }
   }
});
