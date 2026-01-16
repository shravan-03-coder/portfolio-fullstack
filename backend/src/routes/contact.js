const express = require("express");
const router = express.Router();

router.post("/contact", (req, res) => {
  res.json({ message: "Contact API working ✅" });
});

module.exports = router;
