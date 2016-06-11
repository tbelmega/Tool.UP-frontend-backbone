/**
 * Created by tbelmega on 07.06.2016.
 */
var FeatureView = Backbone.View.extend({
    el: '#main-content',
    render: function (id) {
        var scope = this;
        var feature = new Feature({id: id});
        feature.fetch({
            success: function (feature) {
                scope.$el.empty();
                scope.$el.append(_.template(
                    $( ".generic-detail-template" ).html()
                ));
                scope.$el.append(_.template(
                    $( ".feature-detail-template" ).html()
                ));

                var data = feature.attributes;
                console.log(data);

                //Set title and description
                $('#title').text(data['title']);
                $('#description').text(data['description']!= null ? data['description'] : "");
                $('.tools').empty();

                //Create links for all related applications of this feature
                for (var item of data['applications']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBusinessObject('application', item) + '</li>';
                    var list = $('<ul />').html(content);
                    $('.tools').append(list);
                }
            }
        });
    }
})