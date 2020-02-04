document.getElementById('fetchButton').addEventListener('click', function(){
    'use strict';

    var schoolIdToFetch = document.getElementById('locality-dropdown').value;

    fetch('data/' + schoolIdToFetch + '.json').then((response) => {
        return response.json();
    })
    .then((myJson) => {
        populateTable(myJson.Skolenheter);
    });
});
/*
 * Propogate dropdown from kommuner.json with a default option
 * Each option holds name (shown) and code (used in the fetch above)
 */
let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Kommun';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'data/kommuner.json';

fetch(url)  
  .then(  
    function(response) {  
      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].code;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  

function populateTable(tableData){
    var keys = [];
    var table = document.getElementById('table');
    var tablecontent = '';
    //Create head and fill with keys from first row
    tablecontent += ("<thead><tr>");

    for (key in tableData[0]) {

        tablecontent += ('<th>' + key + '</th>');
    }

    tablecontent += ("</tr></thead><tbody>");
    //Fill body of table with data
    for (var i = 0; i < tableData.length; i++) {

        tablecontent += ("<tr>");

        for (key in tableData[i]) {

            tablecontent += ('<td>' + tableData[i][key] + '</td>');
        }

        tablecontent += ("</tr>");
    }

    tablecontent += ("</tbody>")
    //Put tablecontent into the table
    table.innerHTML = tablecontent;
}