/**
 * Created by tbelmega on 07.06.2016.
 */
var CategoryDropDownList = Backbone.View.extend({
    el: '#category-dropdown-content',
    render: function() {
        var scope = this;
        var categories = new CategoriesWithApplications();
        categories.fetch({ //GET top level categories
            success: function(categories) {
                scope.$el.empty();
                for (var item of categories.models) {
                    var content = '<li>' + createLinkBoxForBO('category', item.attributes) + '</li>';
                    var list = $('<ul />').html(content);
                    scope.$el.append(list);
                }
            }
        })
    }
});