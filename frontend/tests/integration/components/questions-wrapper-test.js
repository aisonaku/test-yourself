import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('questions-wrapper', 'Integration | Component | questions wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{questions-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#questions-wrapper}}
      template block text
    {{/questions-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
