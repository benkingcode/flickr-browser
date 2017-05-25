import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({
    fastboot: Ember.inject.service(),
    ajax: Ember.inject.service(),
    model() {
        const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        if (this.get('fastboot.isFastBoot')) {
            return fetch(`${url}&nojsoncallback=1`)
                .then((response) => {
                    return response.json();
                });
        }

        return this.get('ajax').request(url, {
            dataType: "jsonp",
            jsonpCallback: "jsonFlickrFeed"
        });
    }
});
