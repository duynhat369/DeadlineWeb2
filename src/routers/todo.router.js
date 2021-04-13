const express = require("express");
const router = express.Router();

const todoController = require("../controllers/TodoController");

router.get("/", todoController.index);
router.get("/create", todoController.create);
router.post("/create", todoController.createPost);

module.exports = router;
