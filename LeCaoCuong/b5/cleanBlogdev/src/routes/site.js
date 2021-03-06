const express = require('express');
const {model} = require('mongoose');
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get('/about',siteController.about);
router.get('/contact',siteController.contact);
router.get('/',siteController.index);

module.exports = router;