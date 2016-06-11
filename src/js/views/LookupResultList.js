/**
 * Created by tbelmega on 07.06.2016.
 */
var LookupResultList = Backbone.View.extend({
    el: '#best-applications',

    render: function (features) {
        var scope = this;
        var result = new LookupResult({parse:true});
        
        if (features) {
            result.fetch({ //POST lookup
                type: 'POST',
                data: {features: features},
                success: function () {
                    scope.$el.empty();
                    $('#applications').empty();

                    for (var item of result.bestmatches) {
                        var content = '<li>' + createLinkBoxForBusinessObject('application', item) + '</li>';
                        var list = $('<ul />').html(content);
                        scope.$el.append(list);
                    }

                    for (var item of result.singleMatches) {
                        var content = '<li>' + createLinkBoxForBusinessObject('application', item) + '</li>';
                        var list = $('<ul />').html(content);
                        $('#applications').append(list);
                    }
                }
            });
        } else {
            scope.$el.html("Keine Ergebnisse");
        }
    }
});