/**
 * Created by triptoli on 4/30/2017.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParsser=require('body-parser');
var router=express.Router();
app.use(express.static(__dirname+'/www'))
var appRouters=require('./app/routes/api')(router);

app.use(morgan('dev'))
app.use(bodyParsser.json());
app.use(bodyParsser.urlencoded({extended:true}));
app.use('/api',appRouters);

app.get('*',function (req,res) {
    res.sendFile(__dirname+'/www/app/views/index.html')
})

mongoose.connect('mongodb://localhost:27017/parken', function (err) {
    if (err) {
        console.log('Not Connected with DB')
    }
    else {
        console.log('successfully connected with the DB')
    }

})


app.get('/getData', function (req, res) {
    emp1 = {name: 'Amit', city: 'sre'};
    emp2 = {name: 'Aman', city: 'sre'};
    emp3 = {name: 'vikas', city: 'sre'};
    emp4 = {name: 'jyoti', city: 'sre'};
    var data = [emp1, emp2, emp3, emp4];
    res.json(data);

})


app.listen(port, function () {
    console.log('server runing on port ', port);
})