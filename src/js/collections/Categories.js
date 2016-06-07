/**
 * Created by tbelmega on 07.06.2016.
 */
var TopLevelCategories = Backbone.Collection.extend({
    url: '/category/toplevel'
})

var CategoriesWithApplications = Backbone.Collection.extend({
    url: '/category/withApplication'
})