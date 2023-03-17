var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();
app.listen(8000);
app.engine('.hbs', expressHbs.engine({ extname: '.hbs', defaultLayout: "page2"}));
app.set('view engine','.hbs');

app.get('/home', function(req,res){
    res.render('index');
});