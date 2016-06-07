function lookup_selected() {
    var featureString = "";
    $('input[name="feature-checkboxes"]:checked').each(function () {
        if (featureString == "") {
            featureString = this.id;
        } else {
            featureString += "," + this.id;
        }
    });
    console.log("looking up: " + featureString);

    var lookupResultList = new LookupResultList();
    lookupResultList.render(featureString);
}