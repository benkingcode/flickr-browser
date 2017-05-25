
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('extract-flickr-author-url', 'helper:extract-flickr-author-url', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', 'https://www.flickr.com/photos/andyburnham/34730811232/');

  this.render(hbs`{{extract-flickr-author-url inputValue}}`);

  assert.equal(this.$().text().trim(), 'https://www.flickr.com/photos/andyburnham/');
});
