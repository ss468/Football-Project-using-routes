const express=require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static("./public"));

app.get("/mancity",function(req,res){
    res.render("mancity");
});
app.get("/",function(req,res){
    res.render("home");
});
app.get("/liverpool",function(req,res){
    res.render("liverpool");
})
app.get("/chelsea",function(req,res){
    res.render("chelsea");
})
app.get("/newcastel",function(req,res){
    res.render("newcastel");
})

app.listen(3000);