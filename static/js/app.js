// import the data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

// create function to build data table
function buildTable(data){
    // clear out existing data
    tbody.html("");

    // loop through each object in data, 
    // append row and cells for each value in row
    data.forEach((dataRow) => {
        // append row to table body
        let row = tbody.append("tr");

        // loop through each field in dataRow,
        // add each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}