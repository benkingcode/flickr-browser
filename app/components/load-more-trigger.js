import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
    viewportOptionsOverride: Ember.on('didInsertElement', function() {
        Ember.setProperties(this, {
            viewportSpy: true,
            viewportTolerance: {
                bottom: 300
            }
        });
    }),
    didEnterViewport() {
        this.get('onEnter')();
    }
});
