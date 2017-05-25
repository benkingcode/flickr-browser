import Ember from 'ember';

export function extractFlickrDescription(params/*, hash*/) {
    const matches = [];

    params[0].replace(/<p>(.*?)<\/p>/g, function () {
        matches.push(arguments[1]);
    });

    return `<p>${(matches[2] || '')}</p>`;
}

export default Ember.Helper.helper(extractFlickrDescription);
