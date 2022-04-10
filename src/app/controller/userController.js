const User = require('../models/Users');
const sendmail = require('../../utils/sendmail');
class UserController {
  async login(req, res, next) {
    let user = await User.findOne({ userName: req.body.userName });
    console.log(user);
    if (user) {
      if (user.passWord === req.body.passWord) {
        res.cookie('userid', user.id, { signed: true });
        console.log(req.signedCookies);
        res.json({
          "message": "login success",
          "data": user
        });
      }
      else {
        res.json({
          "message": "user name incorrect",
        });
      }
    }
    else {
      res.json({
        "message": "login fail",
        "data": user
      });
    }
  }
  logout(req, res, next) {
    res.clearCookie('userid');
    res.json({ "message": "logout success" });

  }
  async registerUser(req, res, next) {
    let data = req.body;
    try {
      let user = new User(data);
      await user.save();
      res.json({
        "message": "registor success",
        "data": user
      })
    } catch (error) {
      res.json({
        "message": "tài khoản đã tồn tại",
      });
      return;
    };
  }
  async findPassword(req, res, next) {
    let user = await User.findOne({ userName: req.body.userName, email: req.body.email });
    console.log(user);
    if (user) {
      res.json({
        "message": "ok"
      });
    }
    else {
      return res.json({
        "message": "not ok"
      });
    }
    sendmail.sendEmail(user);
  }
  async getCookie(req, res, next) {
    let id = req.headers['userid'];
    console.log(id);

  }
}
module.exports = new UserController();