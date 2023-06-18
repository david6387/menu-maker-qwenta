const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Tous les utilisateurs" });
});

router.get("/:id", (req, res) => {
  /*req.params.id;*/
  const id = req.params.id;
  res.status(200).json({
    /*id: req.params.id,*/
    id: id,
  });
});

module.exports = router;
