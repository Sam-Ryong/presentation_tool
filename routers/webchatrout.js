const express = require('express');
const router = express.Router();
const path = require('path');
const template = require("../public/template.js");


router.get('/chat',async (req,res) => {
  return res.send(template());
});

module.exports = router;