/**
 * Created by tbelmega on 11.06.2016.
 */
var SearchResultList = Backbone.View.extend({
    el: '#main',

    initialize: function(){
        this.render();
    },

    events: {
        'input input': 'search',
        'click #search-button': 'render'
    },

    search: function(){

        var searchString = $("#search-string-input").val();

        if (searchString) {
            var scope = this;
            var applications = new SearchResult();
            scope.$el.find('#result-set').empty();

            applications.fetch({
                type: 'POST',
                data: {'search string': searchString},
                success: function () {
                    for (var item of applications.models) {
                        var content = '<li>' + createLinkBoxForBusinessObject('application', item.attributes) + '</li>';
                        scope.$el.find('#result-set').append(content);
                    }
                }
            })
        }

    },

    render: function() {

        var searchString = $("#search-string-input").val();

        if (searchString) {
            var scope = this;
            var applications = new SearchResult();
            scope.$el.find('#main-content').empty();
            scope.$el.find('#main-content').append(_.template(
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
                    scope.$el.find('#main-content').append('<div id="ready"/>');
                }
            })
        }
    }
});