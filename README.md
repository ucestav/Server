The server files for quiz app and question app 

# Technical Guide

1. NodeJS Server

There are two NodeJS Server files - one for the quiz app and another for the question app. 

Tbe httpServer.js file is used to read questions (quiz points) from the database. Connection details for postGIS are provided in a postGISConnection.js file. Data from the postGIS database are read into a GeoJSON FeatureCollection format which is then inserted into the map as markers. Express.js allows routing by using app.get() to retrieve quiz points and app.post() to upload data in database. 

*References for the NodeJS Server*
[All the code was adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 15th April 2018
Code to create geoJSON format was adapted from http://www.postgresonline.com/journal/archives/267-Creating-GeoJSON-FeatureCollections-with-JSON-and-PostGIS-functions.html, accessed 20th April 2018]


2. Quiz App

The quiz app tracks the location of a user and asks a question when the user is in close-proximity (less than 5 metres). The haversine formula is used to calculate the distance between a user and the location of a question. The file 'appActivity.js' contains t and 'uploadData.js' contains functions for 

**References for the Quiz App**

[uploadData.js Code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 18th April 2018]

[index.html Code adapted from Material Design - : https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018,

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018,

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018,

Haversine Distance Between Two Points: Code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html, accessed 19th April 2018,

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018



3. Question App

**References for the Question App**

[uploadData.js All code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API) , accessed 18th April 2018]

[index.html Material Design for index.html documents: code adapted from Material Design -https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js  Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018

Event Detector for Map Click: Code adapted from https://leafletjs.com/examples/quick-start/, accessed 22th April 2018

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018
