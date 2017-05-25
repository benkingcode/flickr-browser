
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('extract-flickr-author', 'helper:extract-flickr-author', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', 'nobody@flickr.com ("Ben King")');

  this.render(hbs`{{extract-flickr-author inputValue}}`);

  assert.equal(this.$().text().trim(), 'Ben King');
});
