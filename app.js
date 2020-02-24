var express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res) {
    res.render("index");
});

app.get("/consulting", function(req,res) {
    res.render("consulting");
});

app.get("/about-consulting", function(req,res) {
    res.render("about-consulting");
});

app.get("/services-consulting", function(req,res) {
    res.render("services-consulting");
});

app.get("/pricing-consulting", function(req,res) {
    res.render("pricing-consulting");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Cygnify server");
});