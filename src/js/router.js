/**
 * Created by tbelmega on 07.06.2016.
 */
var Router = Backbone.Router.extend({
    routes: {
        'application/:id': 'applicationDetails',
        'category/:id': 'categoryDetails',
        '': 'home'
    }
});

var categoryList = new  CategoryList();
var categoryView = new CategoryView();

var router = new Router();
router.on('route:applicationDetails', function(id) {
    applicationView.render(id);
});
router.on('route:home', function() {
    categoryList.render();
});
router.on('route:categoryDetails', function(id) {
    categoryView.render(id);
});

Backbone.history.start();