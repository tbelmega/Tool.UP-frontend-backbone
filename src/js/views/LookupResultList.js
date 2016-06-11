/**
 * Created by tbelmega on 07.06.2016.
 */
var LookupResultList = Backbone.View.extend({
    el: '#best-applications',

    render: function (features) {
        var scope = this;
        var result = new LookupResult();
        
        if (features) {
            result.fetch({ //POST lookup
                type: 'POST',
                data: {features: features},
                success: function () {
                    scope.$el.empty();

                    for (var item of result.models) {
                        console.log(item);
                        var content = '<li>' + createLinkBoxForBusinessObject('application', item.attributes) + '</li>';
                        var list = $('<ul />').html(content);
                        scope.$el.append(list);
                    }
                }
            });
        } else {
            scope.$el.html("Keine Ergebnisse");
        }
    }
});