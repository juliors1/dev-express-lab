var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "My Dev Express Skills" });
});

module.exports = router;
