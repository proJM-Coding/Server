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
  subject: 'subject here',
  text: 'message here'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
