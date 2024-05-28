var doc = app.activeDocument;
for (var i = 0; i < doc.layers.length; i++) {
    for (var j = 0; j < doc.layers[i].groupItems.length; j++)
    doc.layers[i].groupItems[j].pageItems[0].name = doc.layers[i].groupItems[j].name;
}