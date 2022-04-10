const nodemailer = require("nodemailer");
module.exports.sendEmail = function (data) {
  const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "trinhthanhlong2842000a5lqd@gmail.com",
      pass: "trinhthanhlong"
    }
  });
  const option = {
    from: ' trinhthanhlong2842000a5lqd@gmail.com',
    to: data.email,
    subject: 'your password',
    text: 'this is a your passWord currnt: [ ' + data.passWord + ']'
  }
  tranporter.sendMail(option, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  })
}