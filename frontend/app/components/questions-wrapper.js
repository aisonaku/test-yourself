import Ember from 'ember';

export default Ember.Component.extend({
   userScore: 0,
   isBlocked: false,
   init: function() {
      this._super(...arguments);
      this.get('getQuestions')().then(results => {
         this.set('dataSet', results.toArray());
         let self = this,
            setResult = function(callback) {
               let data = self.get('dataSet');
               self.set('isBlocked', false);
               return self.set('results', {
                  data: data,
                  isFinished: !data.length,
                  callback: callback,
                  userScore: self.get('userScore')
               });
            },
            applyAnswer = function(id) {
               if(self.get('isBlocked')) {
                  return;
               }
               let callback = function() {
                  let fixed = self.get('dataSet');
                  fixed.shift();
                  self.set('dataSet', fixed);
                  if(fixed.length) {
                     return setResult(applyAnswer);
                  } else {
                     return self.get('getResult')().then(res => {
                        self.set('userScore', res.get('stringView'));
                        return setResult(applyAnswer);
                     });
                  }
               };
               self.set('isBlocked', true);
               this.send('applyAnswer', id, callback);
            };
         return setResult(applyAnswer);
      });
      $('.tys-wrapper').addClass('blured');
   },
   actions: {
      close: function() {
         $('.tys-wrapper').removeClass('blured');
         return this.get('close')();
      }
   }
});
