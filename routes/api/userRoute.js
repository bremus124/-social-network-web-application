const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUSer,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/user/:id
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUSer)

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)


  

module.exports = router;
