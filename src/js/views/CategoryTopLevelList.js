/**
 * Created by tbelmega on 07.06.2016.
 */
var CategoryTopLevelList = Backbone.View.extend({
    el: '.category-list',
    render: function() {
        var scope = this;
        var categories = new TopLevelCategories();
        categories.fetch({ //GET top level categories
            success: function(categories) {
                scope.$el.empty();
                for (var item of categories.models) {
                    var content = '<li>' + createLinkBoxForBusinessObject('category', item.attributes) + '</li>';
                    var list = $('<ul />').html(content);
                    scope.$el.append(list);
                }
            }
        })
    }
});