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
                scope.$el.append(_.template(
                    $( ".generic-detail-template" ).html()
                ));
                scope.$el.append(_.template(
                    $( ".category-detail-template" ).html()
                ));

                var data = category.attributes;
                console.log(data);

                //Set title and description
                $('#title').text(data['title']);
                $('#description').text(data['description']!= null ? data['description'] : "");
                $('#subcategories').empty();
                $('.tools').empty();

                //Create links to all subcategories
                for (var item of data['subCategories']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBusinessObject('category', item) + '</li>';
                    var list = $('<ul />').html(content);

                    $('#subcategories').append(list);
                }

                //Create links to all applications of this category
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