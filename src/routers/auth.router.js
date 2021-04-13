const express = require("express");
const router = express.Router();

const authController = require("../controllers/AuthController");

router.get("/showAuths", authController.showAuths);
router.get("/sign-up", authController.register);
router.get("/login", authController.login);
router.post("/login", authController.loginPost);
router.get("/logout", authController.logout);

module.exports = router;
