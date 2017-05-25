
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('extract-flickr-description', 'helper:extract-flickr-description', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{extract-flickr-description inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

