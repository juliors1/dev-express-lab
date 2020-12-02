var express = require("express");
var router = express.Router();
const Skill = require("../models/skill");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("/skills/index", {
    skills: Skill.getAllSkills(),
  });
});

module.exports = router;
