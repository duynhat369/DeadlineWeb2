class SiteController {
  index(req, res) {
    res.locals.title = "Trang chủ";
    res.render("home");
  }

  //[GET] /sum
  sumForm(req, res) {
    res.locals.title = "Cộng hai số";
    res.render("sum");
  }
  //[POST] /sum
  resultForm(req, res) {
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const result = number1 + number2;
    res.render("sum", { number1, number2, result });
  }
}

module.exports = new SiteController();
