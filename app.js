//key:6a15f393
var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");
app.use(express.static("public"));


//Starting Page
app.get("/",function(req,res){
res.render("search");
});

//Results Page
app.get("/results",function(req,res){
    var query = req.query.search;
    var movieDetails = [];
	var url = "http://www.omdbapi.com/?apikey=6a15f393&s="+query;
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var data = JSON.parse(body);
            var l = data["Search"].length;
            for(var i=0;i<l;i++){
                request("http://www.omdbapi.com/?apikey=6a15f393&i="+data["Search"][i]["imdbID"],function(error,response,bodyDetails){
                movieDetails.push(JSON.parse(bodyDetails));
                if(movieDetails.length === l){
                    res.render('results',{movieDetails: movieDetails});
                }
                });
            }
           
            
        }
    });
    });


app.listen(3000,function(){
    console.log("Movie App has started!!!");
});