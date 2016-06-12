/**
 * Created by tbelmega on 07.06.2016.
 */
var CategoryList = Backbone.View.extend({
    el: '#main-content',
    render: function() {
        var scope = this;
        var categories = new CategoriesWithApplications();
        scope.$el.empty();
        scope.$el.append(_.template(
            $( ".category-list-template" ).html()
        ));
        
        categories.fetch({ //GET top level categories
            success: function(categories) {
                for (var item of categories.models) {
                    var content = '<li>' + createLinkBoxForBusinessObject('category', item.attributes) + '</li>';
                    var list = $('<ul />').html(content);
                    scope.$('.category-list').append(list);
                }
                scope.$el.append('<div id="ready"/>');
            }
        })
    }
});