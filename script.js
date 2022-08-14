// api url
const api_url = 
'https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv';
'https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv';
'https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv';
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url)-'data1', 'data2', 'data3';

  

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>StationName</th>
          <th>StationAddress</th>
          <th>StartJourney</th>
          <th>EndJourney</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.sname} </td>
    <td>${r.saddress}</td>
    <td>${r.sjourney}</td> 
    <td>${r.ejourney}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("data").innerHTML = tab;

}
