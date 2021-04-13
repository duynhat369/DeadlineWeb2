const authRouter = require("./auth.router");
const siteRouter = require("./site.router");
const todoRouter = require("./todo.router");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/todo", todoRouter);
  app.use("/", siteRouter);
}

module.exports = route;
