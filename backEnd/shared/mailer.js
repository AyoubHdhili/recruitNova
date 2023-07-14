const mailer = require('nodemailer');

const transporter = mailer.createTransport({
  service:"hotmail",
  auth:{
    user:"recruitnova@outlook.com",
    pass:"123@Nova"
  }
});

const send = (options)=>{transporter.sendMail(options, function(err,info){
  if(err){
    console.log(err);
  }
  console.log(info.response);
})}
module.exports = {send}