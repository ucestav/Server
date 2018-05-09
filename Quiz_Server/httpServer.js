//httpServer for Quiz App
//All code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 15th April 2018

// express is the server that forms part of the nodejs program
var express = require('express');
var path = require("path");
var app = express();
var fs = require('fs'); 
var client;

// Read in the file which had database connection details for postGIS
   var configtext = ""+fs.readFileSync("/home/studentuser/certs/postGISConnection.js"); 
// Change file into the appropriate formate (a name/value pair array)
   var configarray = configtext.split(","); 
   var config = {}; 
   for (var i = 0; i < configarray.length; i++) {     
        var split = configarray[i].split(':');     
	    config[split[0].trim()] = split[1].trim(); 
        }

//Include PostgreSQL dependency 
   var pg = require('pg'); 
//Include a pool connection
   var pool = new pg.Pool(config); 

// Add functionality that permits cross-domain queries when PhoneGap is running a server
   app.use(function(req, res, next) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		next();
    });

	
// Log the requests of files
	app.use(function (req, res, next) {
		var filename = path.basename(req.url);
		var extension = path.extname(filename);
		console.log("The file " + filename + " was requested.");
		next();
	});
	
// Add an http server to serve files to the Edge browser 
	var http = require('http');
	var httpServer = http.createServer(app); 
	httpServer.listen(4480);

//Test basic functionality of HTTP Server
	app.get('/',function (req,res) {
		res.send("hello world from the HTTP server");
	}); 
		  
//Get quiz data from database
 app.get('/getPOI', function (req,res) {      
      pool.connect(function(err,client,done) {        
	    //send an error if connection is not established
        if(err){            
		     console.log("not able to get connection "+ err);            
			 res.status(400).send(err);        
		}               
		// Create geoJSON format - adapted from http://www.postgresonline.com/journal/archives/267-Creating-GeoJSON-FeatureCollections-with-JSON-and-PostGIS-functions.html, accessed 20th April 2018         
          var querystring = " SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features  FROM ";          
		  querystring = querystring + "(SELECT 'Feature' As type     , ST_AsGeoJSON(lg.geom)::json As geometry, ";          
		  querystring = querystring + "row_to_json((SELECT l FROM (SELECT question, answerlist, correctanswer) As l      )) As properties";          
		  querystring = querystring + "   FROM Quiz  As lg limit 100  ) As f ";          
		  console.log(querystring);          
		  client.query(querystring,function(err,result){ 
           //Release the client back to the pool            
		   done();  
           //send error if data cannot be obtained           
		   if(err){                
		       console.log(err);                
			   res.status(400).send(err);            
		    }            
			//send data if successful
			res.status(200).send(result.rows);       
			});     
		}); 
	});

//Get functionality to allow body parsing
	var bodyParser = require('body-parser'); 
	app.use(bodyParser.urlencoded({   
	extended: true })); 
	app.use(bodyParser.json()); 
	
//Upload quiz answers and phone id data to database
app.post('/uploadData',function(req,res){   
		  console.dir(req.body); 
		  
		  //Send error if connection is not established
          pool.connect(function(err,client,done) {         
		    if(err){            
		            console.log("not able to get connection "+ err);             
		            res.status(400).send(err);         
		           }          
		  
		  //Get input values for phone ID and answers
		  //Insert phone ID and answers data into the respective columns of the table labelled answers
          var querystring = "INSERT into answers(phone_id, answerlist) values ('" + req.body.phone_id + "', '" + req.body.answerlist + "')"; 
		  console.log(querystring);        
		  client.query( querystring,function(err,result) {          
		  done();      
          //Send an error message if upload is unsuccessful		  
		  if(err){               
		  console.log(err);               
		  res.status(400).send(err);           
		  }           
		  //Send a message if upload is successful
		  res.status(200).send("Successfully Inserted");        
		  });     
		  }); 
 });