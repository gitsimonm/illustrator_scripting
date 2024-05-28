var doc = app.activeDocument;
var groupId;
var groups = [];
var groupLayer;
var group;

function checkGroupExists (array, id) {
    var exist = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].groupId == id) {
            exist = true;
            break;
        }
    }
    return exist
}

function findGroup (array, id) {
    var group;
    for (var i = 0; i < array.length; i++){
        if (array[i].groupId == id) {
            group = array[i].layerRef;
            break;
        }
    }
    return group
}

for (var i = doc.layers.length -1; i >=0; i--) {
    if (checkGroupExists(groups, doc.layers[i].name)) continue;
    for (var j = doc.layers[i].groupItems.length -1; j >= 0; j--) {
        group = doc.layers[i].groupItems[j];
        groupId = doc.layers[i].groupItems[j].pageItems[0].name.split('_')[2];
        if (checkGroupExists(groups, groupId)) {
            groupLayer = findGroup(groups, groupId);
        } else {
            groupLayer = doc.layers.add();
            groupLayer.name = groupId;
            groups.push({
                "groupId" : groupId,
                "layerRef" : groupLayer
            })   
        }
        group.move(groupLayer, ElementPlacement.PLACEATBEGINNING);
    }
    

    
}