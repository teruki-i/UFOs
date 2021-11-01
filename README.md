# Filtering UFO Sighting Data
## Overview
This project takes UFO sighting data and presents it in a filterable table on an HTML page. This page allows users to input UFO sighting date and location as well as UFO shapes in order to filter the table.

## How the Table Works
![default](https://github.com/teruki-i/UFOs/blob/main/static/images/default.png)

The data table by default displays the full data set, with each row with details on each UFO sighting. To the left of the table are search boxes that allow users to filter the data by date, city, state, country, and/or UFO shape. Though these search boxes appear to be pre-filled, they are filled with placeholder inputs that aren't applied to filter the data.

In order to filter the data, users simply need to fill in a search box. Once a box has been filled, users have to hit enter or have the cursor exit the search box in order for the filter to be applied. In order to revert to the original full data table, users can just clear out the search box.

For example, in order to see details on UFO sightings that occured on January 5, 2010, users can enter "1/5/2010" in the "Enter Date" search box.

![filter_by_date](https://github.com/teruki-i/UFOs/blob/main/static/images/filtered_by_city.png)

Or to see details on sightings in the city of El Cajon, users can enter "El Cajon" in the "Enter City" search box.

![filter_by_city])(https://github.com/teruki-i/UFOs/blob/main/static/images/filtered_by_city.png)

Multiple filters can be applied simultaneously. For example, if "1/5/2010" is entered in the "Enter Date" search box and "El Cajon" is entered in the "Enter City" search box, the data table will be filtered to show details on sightings that occured in El Cajon on January 5, 2010.

![filter_by_both](https://github.com/teruki-i/UFOs/blob/main/static/images/filtered_by_date_%26_city.png)

If, however, the information entered into a search box doesn't match any of the rows of the table, the filtered table will be blank. For example, as the sightings in the data all occured in the year 2010, entering "12/31/2020" in the "Enter Date" box will return an empty table.

![empty_table](https://github.com/teruki-i/UFOs/blob/main/static/images/empty_table.png)

## Improvements

One drawback is that table headers aren't fixed in place. In other words, when scrolling through the full data table or a filtered table with many rows, users won't be able to see the headers any more after a certain point. In order to fix this, it might be better to add coding in the HTML file that would add the data into a scrollable table.

Another drawback is that the table is only displaying very limited sighting data. In fact, the data only includes sightings in the US from January 1 to January 13 of 2010. This limitation is largely because the table is displaying data from a rather limited data file. Instead, a much larger data file that includes more recent sightings from more locations could be used. Or alternatively, webscraping or API requests could be used in order to add in updated sighting data from other databases on a regular basis instead of relying on a static data file.