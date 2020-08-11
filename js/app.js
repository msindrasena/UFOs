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

// New Function for filtered datetime clickbutton
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; // select default filter and save to new variable 
    
    // If statement to check to see if a date was entered and filter using that date
    if (date) {
        // Applying filter to table data and keep rows where datetime value matches filter
        filteredData = filteredData.filter(row => row.datetime === date); 
    }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);