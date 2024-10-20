const express = require('express');
const router = express.Router();
const { getLevel1, getLevel2, getLevel3, getLevel4, getLevel5, getOptions } = require('../controllers/questions');

// Separate routes for each level
router.route('/level1').get(getLevel1);
router.route('/level2').get(getLevel2);
router.route('/level3').get(getLevel3);
router.route('/level4').get(getLevel4);
router.route('/level5').get(getLevel5);
router.route('/options').get(getOptions);

module.exports = router;
