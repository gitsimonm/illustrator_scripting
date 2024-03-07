var doc = app.activeDocument;
for (var i = 0; i < doc.layers.length; i++) {
    doc.layers[i].name = doc.layers[i].pageItems[0].name;
}