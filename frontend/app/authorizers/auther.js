import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
   authorize(data, block) {
      block('auth_token', `${data.auth_token}`);
   }
});
