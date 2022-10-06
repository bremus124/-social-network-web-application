const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoute');
const friendsRoutes = require('./friendsRoute');
const reactionRoutes = ('./reactionRoute');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/friends', friendsRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;