const path = require('path');
const router = require('express').Router()

// Import Routes
const userRoutes = require('./api/users');
const authRoutes = require('./api/auth');
const profileRoutes = require('./api/profile');
const postsRoutes = require('./api/posts');

//Routes to export to server
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/profile', profileRoutes);
router.use('/api/posts', postsRoutes);

module.exports = router;