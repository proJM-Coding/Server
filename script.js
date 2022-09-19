function Email(){
  require('dotenv').config();
  process.env.SEND_EMAIL;
  process.env.RECEIVE_EMAIL;
  process.env.EMAIL_PASS;
  var id = Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10);
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SEND_EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  var mailOptions = {
    from: process.env.SEND_EMAIL,
    to: process.env.RECEIVE_EMAIL,
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

let captureVideo = async function() {
    try {
        let getScreenData = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });
        videoElement.srcObject = getScreenData;
    } catch (e) {
        console.log(e);
    }

}

function Kill(){
  window.close();
};
