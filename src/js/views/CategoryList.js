/**
 * Created by tbelmega on 07.06.2016.
 */
var CategoryList = Backbone.View.extend({
    el: '.category-list',
    render: function() {
        var scope = this;
        var categories = new Categories();
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