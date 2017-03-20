import DS from 'ember-data';

export default DS.Model.extend({
   title: DS.attr(),
   categoryid: DS.attr(),
   categorytitle: DS.attr(),
   description: DS.attr()
});
