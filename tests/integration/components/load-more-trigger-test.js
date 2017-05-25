import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('load-more-trigger', 'Integration | Component | load more trigger', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{load-more-trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#load-more-trigger}}
      template block text
    {{/load-more-trigger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
