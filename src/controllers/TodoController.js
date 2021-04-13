const { Todo } = require("../models");

class TodoController {
  //[GET] /Todo
  async index(req, res, next) {
    res.locals.title = "Danh sách công việc";
    let todoObject = await Todo.findAll(); //object
    let todoView = JSON.parse(JSON.stringify(todoObject));
    console.log(todoView);
    res.render("todo/index", { todoView });
  }
  //[GET]
  create(req, res, next) {
    res.render("todo/create");
  }

  //[POST]
  async createPost(req, res, next) {
    let todoInput = {
      todoName: req.body.name,
      todoDes: req.body.des,
    };
    const todoResult = await Todo.create(todoInput);
    console.log(todoResult);
    res.redirect("/todo");
  }
}

module.exports = new TodoController();
