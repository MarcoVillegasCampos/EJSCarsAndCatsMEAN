var express = require("express");

var app = express();
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');




  app.listen(8000, function() {
    console.log("listening on port 8000");
  })


  app.use(express.static(__dirname + "/static"));

  app.get("/cars", function (request, response){
    // hard-coded user data

    response.render('cars');
})

app.get("/cats", function (request, response){
  // hard-coded user data

  response.render('cats');
})

app.get("/cars/new", function (request, response){
  // hard-coded user data

  response.render('form');
})