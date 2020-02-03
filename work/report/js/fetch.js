document.getElementById("fetchButton").addEventListener("click", function(){
    'use strict';

    var schoolIdToFetch = document.getElementById("selectedKommun").value;

    fetch('data/' + schoolIdToFetch + '.json').then((response) => {
        return response.json();
    })
    .then((myJson) => {
        populateTable(myJson.Skolenheter);
    });
});

function populateTable(tableData){
    var keys = [];
    var table = document.getElementById('table');
    var tablecontent = '';
    tablecontent += ("<tr>");

    for (key in tableData[0]) {

        tablecontent += ('<th>' + key + '</th>');
    }

    tablecontent += ("</tr>");

    for (var i = 0; i < tableData.length; i++) {

        tablecontent += ("<tr>");

        for (key in tableData[i]) {

            tablecontent += ('<td>' + tableData[i][key] + '</td>');
        }

        tablecontent += ("</tr>");
    }

    table.innerHTML = tablecontent;
}