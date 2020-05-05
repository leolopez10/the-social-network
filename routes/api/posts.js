const express = require('express')
const router = express.Router();
const request = require('request')
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

// @route   GET api/posts
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => { res.send('Posts Route') });

module.exports = router;