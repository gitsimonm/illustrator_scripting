function rgbToAdobeRGB (rgbValue) {
    var paletteColour = new RGBColor();
    paletteColour.red = rgbValue[0];
    paletteColour.green = rgbValue[1];
    paletteColour.blue = rgbValue[2];
    return paletteColour
}

function hexToRgb (hex, conname) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var array = [];
    var object = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    if (object == null) {alert (conname)}
    array.push((object.r), (object.g), (object.b));
    return array
};

var doc = app.activeDocument;
var hex, name;

for (var i = 0; i < doc.layers.length; i++) {
    for (var j = 0; j < doc.layers[i].groupItems.length; j++) {
        hex = doc.layers[i].groupItems[j].pageItems[0].name.split('_')[3];
        conname = doc.layers[i].groupItems[j].pageItems[0].name;
        doc.layers[i].groupItems[j].pageItems[0].fillColor = rgbToAdobeRGB(hexToRgb(hex, conname));
        if (doc.layers[i].groupItems[j].pageItems[0].pathItems) {
            doc.layers[i].groupItems[j].pageItems[0].pathItems[0].fillColor = rgbToAdobeRGB(hexToRgb(hex, conname))
        }
    }
}