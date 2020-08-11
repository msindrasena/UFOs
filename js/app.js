// This is where we keep the code that builds the HTML table 
// and fills it with data from data.js

// Declare a variable, tableData using const
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the table to sore and store the data
function buildTable(data) {
    // clear our any existing data
    tbody.html("");  

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Create a variable that will append a row to table body
        let row = tbody.append("tr"); 
        
        // Loop through each field in the dataRow and add
        Object.values(dataRow).forEach((val) => { 
            let cell = row.append("td"); // appending data into a table dataTag 
            cell.text(val);
            }
        );
    });
}
