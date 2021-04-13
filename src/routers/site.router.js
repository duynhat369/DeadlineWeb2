const express = require("express");
const router = express.Router();

const siteController = require("../controllers/SiteController");

router.get("/mailer", siteController.mailer);
router.get("/sum", siteController.sumForm);
router.post("/sum", siteController.resultForm);
router.get("/", siteController.index);

module.exports = router;
