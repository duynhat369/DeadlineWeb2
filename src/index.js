const express = require("express");
const exphbs = require("express-handlebars"); //require express handlebars template engine
const cookieSession = require("cookie-session");
const path = require("path"); // system library
const { sequelize } = require("./models");
// const meMiddleware = require("./app/middlewares/me.middleware");
// const todoMiddleware = require("./app/middlewares/todo.middleware");

//require other folders/files
const route = require("./routers");

const app = express();
const port = process.env.PORT || 3000;

//cookie session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY || "secret"],
    maxAge: 24 * 60 * 60 * 1000, //24 hours
  })
);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "resources", "views")); //set path views to resources/views folder
app.use(express.static(path.join(__dirname, "public")));

//app use handlebars template engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b, //@index + 1
    },
  })
);
app.set("view engine", "hbs");

//middleware
// app.use(meMiddleware);
// app.use(todoMiddleware);

//route init
route(app);

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  await sequelize.authenticate();
  console.log("DB synced!");
});
