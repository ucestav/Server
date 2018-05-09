
The server files for quiz app and question app 

# Technical Guide

1. NodeJS Server

A NodeJS Server file 'httpServer.js' is required to transfer data via HTTP in the quiz app and question app. Each file is in its respective folder within the 'Server' Repository. The httpServer.js files are used to read questions (quiz points) from the PostgreSQL database. Connection details for the database are provided in a postGISConnection.js file (this is not available in GitHub due to security reasons). Data from the PostgreSQL database are read into a JSON format (GeoJSON FeatureCollection) which is then inserted into the map as markers. The 'pg' connection is used to connect with PostgreSQL. Express.js allows routing by using app.get() to retrieve quiz points and app.post() to upload data to the database. 

*References for the NodeJS Server*
[All the code was adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 15th April 2018. Also available via Github: https://github.com/claireellul/cegeg077-week6formcode/blob/master/ucfscde/www/js/uploadData.js

Code to create geoJSON format was adapted from http://www.postgresonline.com/journal/archives/267-Creating-GeoJSON-FeatureCollections-with-JSON-and-PostGIS-functions.html, accessed 20th April 2018]

**Apps**

Material Design was used as the template for both Apps (https://getmdl.io/templates/index.html) and the interactive map was provided by Leaflet (https://leafletjs.com/)

2. Quiz App

The Quiz App displays a question for the user once they are in close-proximity to a point of interest (POI). The location of the user is tracked and a multiple-choice question pops up when they are 5 metres from a given point. The question is specific to the POI. For example, a question about the age of UCL could be created if a user was near UCL. An answer is selected by the user and an alert is created by the system to notify the user if they are right or wrong. The answers and phone ID are uploaded to a database when the user submits their final answer. A new question pops up when the user moves to a new location.

There are 4 files in the Quiz Repository that are used to achieve functionality in the Quiz App. The ‘index.html’ file has code relating to the app design, the ‘upload.Data.js’ relates to transferring data into the database, ‘appActivity.js’ relates to functions used in the quiz activity, and ‘httpServer.js’ allows data transfer between database and App. The user guide is labelled 'Quiz_Guide.html' in the www directory. A link in the navigation bar and dropdown menu of the (index) HTML file has been created to retrieve information about using the Quiz App. 

The Quiz App requests quiz data from the PostgreSQL database which is then inserted into the map or parsed to acquire individual data (e.g. question). The location of quiz points are identified by a blue marker and the user's location is identified by a red marker. Distance from the user's location to a quiz point is calculated using the haversine formula. If the user is within 5 metres from a POI, a quiz popup will be generated at the location on the map. The database generates a question relating to movie scenes that were shot in UCL  and there are four alternative answers (‘Inception’, ‘Spiderman’, ‘Thor’ and ‘Transformers’) which are inserted as checkboxes. The user can select one of these answers and an alert message indicates whether they are right or wrong. The database contains the correct answer which is matched against the value of each checkbox. If they match, an alert message is created to notify the user that they are correct. If they don’t match, an alert message is created to notify the user that they are incorrect. The selected answer(s) and phone ID value is inserted into the database once the user presses the submit button.The user's position is tracked and the procedure can be repeated when the user is at a new location. 

Steps to Run Quiz App
1. Download Quiz App: The code to run this app is on a GitHub account(https://github.com/ucestav). PhoneGap Build can be used to create the app and a QR reader is able to download it onto a mobile device
2. Run NodeJS Server File: Existing questions are inserted onto the map and phone ID and answers are uploaded into database 
3. Open Quiz App and locate user's position: The user's location is identified by a red marker and the map view is set to have the    user's location at the centre. 
4. The position of the user is tracked as they move. Once the user is within 5 metres from a location that has a question attached to it, a popup will appear with the question and four checkbox answers
5. The user selects the answer and an alert will appear to notify them if it is correct or wrong. 
6. The user inserts a phone ID
7. After the user has selected an answer and inserted a phone ID, press the submit button to upload data into database 
8. Move to a new location for another question </li>

**References for the Quiz App**

[uploadData.js Code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 18th April 2018,
Also available from: https://github.com/claireellul/cegeg077-week6formcode/blob/master/ucfscde/www/js/uploadData.js
]

[index.html Code adapted from Material Design - : https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018,
Also available from: https://github.com/claireellul/cegeg077-week5app/blob/master/ucfscde/www/js/appActivity.js

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018,

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018,
Also available from: https://github.com/claireellul/cegeg077-week5server/blob/master/httpServer.js

Haversine Distance Between Two Points: Code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html, accessed 19th April 2018,
Also available from: https://github.com/claireellul/cegeg077-week1/blob/master/getDistance.html

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018. 
Also available from: https://github.com/claireellul/cegeg077-week4/blob/master/ucfscde/www/js/appActivity.js]


3. Question App

The objective of the Question App is to create a new question when a point on the map is clicked. The user inputs a question and four alternative answers which relate to the POI. The data is then stored in a database and can be inserted into the Quiz App when it is launched.

Similar to the Quiz App, there are 4 files that are used to achieve functionality in the Question App.  The ‘index.html’ file has code relating to the app design, the ‘upload.Data.js’ relates to uploading data into the database, ‘appActivity.js’ relates to quiz functions, and ‘httpServer.js’ allows data transfer between database and app. The user guide is labelled 'Question_Guide.html' in www directory. 

Quiz data from the PostgreSQL database is requested and inserted into the Question App. A marker is inserted on a map to identify the location of the quiz points and a corresponding popup states that it is a ‘Location with Existing Question’. The user is able to select any point on a map and a popup with text fields relating to the question, four alternative answers, correct answer, longitude and latitude is created. The user inserts the relevant information for each text field and these values are inserted into the PostgreSQL database when the submit button is pressed. The location of a user is tracked and the map view is set to its boundaries. This function helps the user to identify their own position and they can become orientated with nearby features. 

Steps to Run Question App
1. Download Question App: The code to run this app is on a GitHub account (https://github.com/ucestav).
2. Run NodeJS Server: Existing questions are inserted on the map and new questions are uploaded into the database 
3. Open Question App and locate user's position: The user's location is identified by a red marker and the map view is set to have the user's location at the centre. 
4. Search map and click on a location: Existing questions are identified by blue markers. A user creates a question that is relevant to the location.
5. A popup with textboxes will appear at the clicked location and the user is required to input the following data: a question, four alternative answers, the correct answer, longitude and latitude.
6. After all textboxes are filled out, press the submit button and the data is inserted into the database.


**References for the Question App**

[uploadData.js All code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API) , accessed 18th April 2018,
Also available from: https://github.com/claireellul/cegeg077-week6formcode/blob/master/ucfscde/www/js/uploadData.js]

[index.html Material Design for index.html documents: code adapted from Material Design -https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js  Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018
Also available from: https://github.com/claireellul/cegeg077-week5app/blob/master/ucfscde/www/js/appActivity.js

Event Detector for Map Click: Code adapted from https://leafletjs.com/examples/quick-start/, accessed 22th April 2018

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018,
Also available from: https://github.com/claireellul/cegeg077-week4/blob/master/ucfscde/www/js/appActivity.js

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018,
Also available from -https://github.com/claireellul/cegeg077-week5server/blob/master/httpServer.js]
