var nodemailer = require('nodemailer');
var email   = require("emailjs");



// send mail with defined transport object
module.exports.sendemail = function(name, toaddr, link){

console.log('came into send email method:');
        // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://sivascse%40gmail.com:banumathy27@smtp.gmail.com');


        // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Online Quiz " <info@nsqat.com>', // sender address
        to: toaddr, // list of receivers
        subject: 'Online Quiz Registration....', // Subject line
        text: 'Hello :-)', // plaintext body
        html: `<b>Hello `+name+`</b>
                <br>=================<br>
                Please create Password for OnlineQuiz <a href="`+link+`">HERE</a>
                <p>` // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log('Email ------------- '+error);
        }
        console.log('Message sent: ' + info.response);
    });
}; 



// //module.exports.sendemail2 = function(name, toaddr, link){

//     var server  = email.server.connect({
//    user:    "gnusiva@hotmail.com", 
//    password:"banumathy27", 
//    host:    "smtp-mail.outlook.com", 
//    tls: {ciphers: "SSLv3"}
// });

// var message = {
//    text:    "i hope this works", 
//    from:    "you <gnusiva@hotmail.com>", 
//    to:      "Siva <sivabgs27@gmail.com>, another <another@your-email.com>",
//    //cc:      "else <else@your-email.com>",
//    subject: "testing emailjs",
//    attachment: 
//    [
//       {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
//       //{path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
//    ]
// };

// // send the message and get a callback with an error or details of the message that was sent
// server.send(message, function(err, message) { console.log(err || message); });

// //};