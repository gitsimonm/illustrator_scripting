var comp = app.project.activeItem;
if (!(comp instanceof CompItem)) {
    alert('please select a comp!')
} else {
    app.beginUndoGroup('rename layers');
    var currentName;
    var newName;
    for (var i = 1; i <= comp.layers.length; i++) { // after effects layers index from 1
        currentName = comp.layers[i].name;
        var split = currentName.split('~');
        newName = split[1];
        newId = split[2];
        comp.layers[i].name = newName + ' ~ ' + newId;
    }
    app.endUndoGroup();
}