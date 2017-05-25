import { test } from 'qunit';
import moduleForAcceptance from 'holiday-extras-flickr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    const items = find('.grid-item');

    assert.notEqual(0, items.length);
  });
});
