function createLinkBoxForBusinessObject(type, itemModel) {
    var id = itemModel.id;
    var title = itemModel.title;
    return '<a href="#/' + type + '/' + id + '">' + title + '</a>';
}
