const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoute');
// const reactionRoutes = ('./reactionRoute');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
// router.use('/reaction', reactionRoutes);

module.exports = router;