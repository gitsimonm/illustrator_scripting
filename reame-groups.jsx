var doc = app.activeDocument;
for (var i = 0; i < doc.layers.length; i++) {
    doc.layers[i].groupItems[0].name = doc.layers[i].name;
}