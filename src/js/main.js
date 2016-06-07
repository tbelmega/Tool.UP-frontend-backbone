function createLinkBoxForBO(type, itemModel) {
    var id = itemModel.id;
    var title = itemModel.title;
    return '<a href="#/' + type + '/' + id + '">' + title + '</a>';
}

var toolUpApp = (function() {

    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        applications: null,
        init: function () {
        },
    };
    var ViewsFactory = {
    };
    var Router = Backbone.Router.extend({
        routes: {
        }
    });
    api.router = new Router();
    return api;
})();
