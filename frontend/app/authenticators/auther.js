import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import fetch from 'ember-network/fetch';

const { RSVP: { Promise }, isEmpty, run, assign: emberAssign, merge } = Ember;
const assign = emberAssign || merge;

export default Base.extend({

   restore(data) {
      return this._validate(data) ? Promise.resolve(data) : Promise.reject();
   },

   authenticate(login, pass) {
      return new Promise((resolve, reject) => {
         let data = {
            name: login,
            password: pass
         };
         this.makeRequest(data).then(response => {
            if(response.ok) {
               response.json().then(json => {
                  if(this._validate(json)) {
                     run(null, resolve, json);
                  }
               });
            } else {
               response.json().then(json => run(null, reject, json));
            }
         }).catch(error => run(null, reject, error));
      });
   },

   makeRequest(data, options = {}) {
      let requestOptions = {};
      let body = JSON.stringify(data);
      assign(requestOptions, {
         body,
         method: 'POST',
         headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
         }
      });
      assign(requestOptions, options || {});
      return fetch('/api/v1/users/sign_in', requestOptions);
   },

   invalidate() {
      return Promise.resolve();
   },

   _validate(data) {
      return !isEmpty(data.auth_token);
   }
});
