function createLinkBoxForBusinessObject(type, itemModel) {
    var id = itemModel.id;
    var title = itemModel.title;
    return '<a href="#/' + type + '/' + id + '">' + title + '</a>';
}

//Hitting "ENTER" in search text field triggers search
$("#search-string-input").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-button").click();
    }
});