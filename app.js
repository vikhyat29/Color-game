var express=require('express');
var app=express();
//let cjs=require('./ColorGame.js');
app.set("view engine","ejs");
app.use(express.static("stylesheets"));

app.get("/",function(req,res){
	res.render("index",
	//	utils: cjs
	);
});

app.listen(3000,function(){
	console.log("Server Started");
});