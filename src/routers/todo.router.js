const express = require("express");
const router = express.Router();

const todoController = require("../controllers/TodoController");

router.get("/create", todoController.create);
router.post("/create", todoController.createPost);
router.get("/", todoController.index);

module.exports = router;
