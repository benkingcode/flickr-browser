
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('extract-flickr-description', 'helper:extract-flickr-description', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', `<p><a href="https://www.flickr.com/people/puaforums/">PUA Forum1</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/puaforums/34082732533/" title="Best Niche Dating Sites"><img src="https://farm5.staticflickr.com/4228/34082732533_b3af05c4b1_m.jpg" width="80" height="80" alt="Best Niche Dating Sites" /></a></p> <p>Description</p>`);

  this.render(hbs`{{extract-flickr-description inputValue}}`);

  assert.equal(this.$().text().trim(), '<p>Description</p>');
});
