/**
 * Created by tbelmega on 07.06.2016.
 */
var LookupResult = Backbone.Model.extend({
    url: '/lookup',
    parse: function(attrs) {
        this.bestmatches = attrs['bestMatches'];
        this.singleMatches = attrs['singleMatches'];
    }

});