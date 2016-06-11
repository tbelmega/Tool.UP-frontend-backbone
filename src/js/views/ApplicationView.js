var ApplicationView = Backbone.View.extend({
    el: '#main-content',
    render: function (id) {
        var scope = this;
        var application = new Application({id: id});
        application.fetch({
            success: function (application) {                
                scope.$el.empty();
                scope.$el.append(_.template(
                    $( ".generic-detail-template" ).html()
                ));
                scope.$el.append(_.template(
                    $( ".application-detail-template" ).html()
                ));

                var data = application.attributes;
                console.log(data);

                //Set title and description
                $('#title').text(data['title']);
                $('#description').text(data['description']!= null ? data['description'] : "");
                $('#features').empty();
                $('#categories').empty();

                //Create links for all related features of this application
                for (var item of data['features']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBusinessObject('feature', item) + '</li>';
                    var list = $('<ul />').html(content);

                    $('#features').append(list);
                }

                //Create links for all related categories of this application
                for (var item of data['categories']) {
                    item = JSON.parse(item);
                    var content = '<li>' + createLinkBoxForBusinessObject('category', item) + '</li>';
                    var list = $('<ul />').html(content);

                    $('#categories').append(list);
                }
            }
        });
    }
})