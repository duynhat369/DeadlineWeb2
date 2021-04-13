const { Auths } = require("../models");

class AuthController {
  //[GET] /auth/sign-up
  register(req, res) {
    res.locals.title = "Welcome To Deadline X";
    res.render("auth/sign-up");
  }

  //[GET] /auth/login
  login(req, res) {
    res.locals.title = "Login Page";
    res.render("auth/login");
  }
  //[POST] /auth/login
  loginPost(req, res, next) {
    const username = req.body.inputLoginName;
    const password = req.body.inputLoginPassword;
    userModel
      .findByUserName(username)
      .then(function (found) {
        if (found && found.password === password) {
          req.session.userName = found.userName;
          res.redirect("/");
        } else {
          res.render("auth/login");
        }
      })
      .catch(next);
  }

  //[GET] /auth/logout
  logout(req, res) {
    delete req.session.userName;
    res.redirect("/");
  }

  async showAuths(req, res, next) {
    let listAuth = await Auths.findAll();
    console.log(listAuth);
    res.json(listAuth);
  }
}

module.exports = new AuthController();
