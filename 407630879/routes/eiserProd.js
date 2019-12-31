var express = require("express");
var router = express.Router();
var controller;

/* GET home page. */

router.get("/combined", function(req, res, next) {
  res.render("combineProd", { title: "Express" });
});

router.get("/new", function(req, res, next) {
  res.render("newProd", { title: "Express" });
});

router.get("/featured", function(req, res, next) {
  res.render("featureProd", { title: "Express" });
});

module.exports = router;
