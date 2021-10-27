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

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Detect click in order to execute handleClick
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);