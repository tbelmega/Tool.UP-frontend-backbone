/**
 * Created by tbelmega on 11.06.2016.
 */
var SearchResultList = Backbone.View.extend({
    el: '#main-content',
    render: function() {
        var searchString = $("#search-string-input").val();

        if (searchString) {
            var scope = this;
            var applications = new SearchResult();
            scope.$el.empty();
            scope.$el.append(_.template(
                $(".application-list-template").html()
            ));

            applications.fetch({
                type: 'POST',
                data: {'search string': searchString},
                success: function () {
                    for (var item of applications.models) {
                        var content = '<li>' + createLinkBoxForBusinessObject('application', item.attributes) + '</li>';
                        var list = $('<ul />').html(content);
                        scope.$('.application-list').append(list);
                    }
                }
            })
        }
    }
});