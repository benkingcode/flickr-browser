import Ember from 'ember';

export function extractFlickrAuthorUrl(params/*, hash*/) {
    const result = params[0].match(/\/photos\/([^/]*)\//);
    return `https://www.flickr.com/photos/${result[1]}/`;
}

export default Ember.Helper.helper(extractFlickrAuthorUrl);
