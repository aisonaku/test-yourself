import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['quiz-filter'],
  title: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('quiz', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('title');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('quiz', filterResults));
    }
  }

});