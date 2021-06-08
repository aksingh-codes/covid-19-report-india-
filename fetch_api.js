let api = fetch("https://api.covid19india.org/data.json");

const makeTable = (api_data) => {
    // console.log(api_data);

    let statewise_data = api_data.statewise;

    let table = document.getElementById("stateTable");
    generateTable(table ,statewise_data);

};


api.then( res => res.json() )
.then( data => makeTable(data) )
.catch( error => {
  console.log('ERROR');
  let body = document.querySelector("body");
  let newh2 = document.createElement("h2");
  newh2.innerHTML = `Could not fetch the data please refresh!`;
  body.appendChild(newh2);
});


function generateTable(table, data){

    let tBody = document.querySelector("#stateTable tbody");

    for (let i = 0; i < data.length; i++) {

        let newRow = document.createElement("tr");

        let state = data[i].state;
        let confirmed = data[i].confirmed;
        let recovered = data[i].recovered;
        let deaths = data[i].deaths;
        let active = data[i].active;
        let update = data[i].lastupdatedtime;

        newRow.innerHTML = `<td>${state}</td>
                            <td>${confirmed}</td>
                            <td>${recovered}</td>
                            <td>${deaths}</td>
                            <td>${active}</td>
                            <td>${update}</td>`;



        tBody.appendChild(newRow);



    }

}
