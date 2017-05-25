import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),
    fastboot: Ember.inject.service(),
    page: 1,
    actions: {
        loadMore() {
            if (this.get('fastboot.isFastBoot')) {
                return;
            }

            this.incrementProperty('page');

            const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&page=${this.get('page')}`;

            this.set('isLoading', true);

            this.get('ajax').request(url, {
                dataType: "jsonp",
                jsonpCallback: "jsonFlickrFeed"
            }).then((data) => {
                this.get('model.items').pushObjects(data.items);
                this.set('isLoading', false);
            });
        }
    }
});
