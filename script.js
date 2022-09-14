function Email(){
  var id = Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10);
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SEND_EMAIL,
      pass: EMAIL_PASS
    }
  });

  var mailOptions = {
    from: SEND_EMAIL,
    to: RECEIVE_EMAIL,
    subject: 'Session Id:',
    text: id
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
   } else {
      console.log('Email sent: ' + info.response);
    }
  });
};