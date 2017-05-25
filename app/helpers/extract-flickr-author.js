import Ember from 'ember';

export function extractFlickrAuthor(params/*, hash*/) {
    return params[0].match(/\("(.*)"\)/)[1];
}

export default Ember.Helper.helper(extractFlickrAuthor);
