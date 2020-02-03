document.getElementById("fetchButton").addEventListener("click", function(){
    'use strict';

    var schoolIdToFetch = 1256

    fetch('data/1256.json').then((response) => {
        return response.json();
    })
    .then((myJson) => {
        populateTable(myJson);
    });
})

function populateTable(json){
    var col = [];
    for(var i = 0; i < json.Skolenheter.length; i++){
        for(var key in json.Skolenheter[i]){
            if(col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tableRow = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < schools.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = schools[i][col[j]];
        }
    }

    
    var tableContainer = document.getElementById("content");
    tableContainer.innerHTML = "".appendChild(table);
}