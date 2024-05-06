function convertToAdjList(adjMatrix) {
    if (adjMatrix.length == 0){
        return adjMatrix;
    }
    var list = [];
    for (var i = 0; i < adjMatrix.length; i++){
        var tmpList = [];
        for (var j = 0; j < adjMatrix[0].length; j++){
            if (adjMatrix[i][j] == 1){
                tmpList.push(j);
            }
        }
        list.push(tmpList);
    }
    return list;
}
