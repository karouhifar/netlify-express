const express = require("express");
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

const HTTP_PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    // res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
    res.status(200).json({message:"Connected"});
});

app.post('/send',
body('name').not().isEmpty() ,
body('email').isEmail().normalizeEmail(),
body('subject').not().isEmpty() ,
body('message').not().isEmpty() ,
function(req, res) {
    // res.status(200).sendFile(path.join(__dirname + '/public/contact.html'));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    let mailOptions = '';
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: 'kamyabportfolio@gmail.com', // generated ethereal user
        pass: 'Aa{?1%2D63~q'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });
 
  // setup email data with unicode symbols


 let output = '';
 let listReceivers =[`karouhifar@gmail.com`,`${req.body.email}`];
 listReceivers.map((value) =>{

  if (value == 'karouhifar@gmail.com') {
   output = `
    <h2>Contact Confirmation</h2>
    <h3>-- 📧 Contact Details  📧--</h3>
    <ul>  
      <li>Name: <span style="color:red;">${req.body.name}</span></li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>-- Message --</h3>
    <p>${req.body.message}</p>
  `;
  }
  else {
    output = `
   <h2>Your message has been sent to owner of website</h2>
   <p>Thank Mr(s).${req.body.name} for sending an Message 😀</p>
  `;
  }


  mailOptions = {
      from: '"Portfolio message" <kamyabportfolio@gmail.com>', // sender address
      to: value, // list of receivers
      subject: `${req.body.subject}`, // Subject line
      text: '', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      //  const snackbar = Snackbar.show({text: 'Example notification text.'});
  
});
});
res.status(201).json(mailOptions);

});


// Listening to server Port 8080
app.listen(HTTP_PORT,  () => {
    console.log(`CORS-enabled web server listening on port ${HTTP_PORT}`)
  })