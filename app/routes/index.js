import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({
    fastboot: Ember.inject.service(),
    ajax: Ember.inject.service(),
    model() {
        const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        const shoebox = this.get('fastboot.shoebox');
        const shoeboxStore = shoebox.retrieve('photos');

        if (this.get('fastboot.isFastBoot')) {
            return fetch(`${url}&nojsoncallback=1`)
                .then((response) => {
                    return response.text();
                }).then((text) => {
                    const fixed = text.replace(/\\'/g, "&#39;");
                    const json = JSON.parse(fixed);
                    shoebox.put('photos', json);
                    return json;
                });
        }

        if (shoeboxStore) {
            return shoeboxStore;
        }

        return this.get('ajax').request(url, {
            dataType: "jsonp",
            jsonpCallback: "jsonFlickrFeed"
        });
    }
});
