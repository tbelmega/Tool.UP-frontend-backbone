/**
 * Created by tbelmega on 07.06.2016.
 */
var CategoryView = Backbone.View.extend({
    el: '#main-content',
    render: function (id) {
        var scope = this;
        var category = new Category({id: id});
        category.fetch({
            success: function (category) {
                scope.$el.empty();
                var template = _.template(
                    $( ".category-detail-template" ).html()
                );
                scope.$el.append(template);

                var data = category.attributes;
                console.log(data);

                $('#title').text(data['title']);
                $('#description').text(data['description']!= null ? data['description'] : "");
                $('#subcategories').empty();
                $('#tools').empty();

                for (var item of data['subCategories']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBO('category', item) + '</li>';
                    var list = $('<ul />').html(content);

                    $('#subcategories').append(list);
                }

                for (var item of data['applications']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBO('application', item) + '</li>';
                    var list = $('<ul />').html(content);

                    $('#tools').append(list);
                }
            }
        });
    }
})