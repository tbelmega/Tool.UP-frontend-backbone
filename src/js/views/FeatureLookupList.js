/**
 * Created by tbelmega on 07.06.2016.
 */
var FeatureLookupList = Backbone.View.extend({
    el: '#main-content',

    render: function () {
        var scope = this;
        var features = new Features();
        features.fetch({ //GET all features
            success: function() {
                scope.$el.empty();
                scope.$el.append(_.template(
                    $( ".feature-lookup-template" ).html()
                ));

                for (var item of features.models) {
                    var content = '<li><input type="checkbox" name="feature-checkboxes" ' +
                        'id="' + item.attributes.id + '" onclick="lookup_selected()">' + " " + item.attributes.title + ' </input></li>';
                    scope.$('#feature-checkboxes').append(content);
                }
            }
        });
    }
});