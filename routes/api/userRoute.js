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

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUSer)


router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend);
// router
//   .route('/:id/friends/:friendId')
//   .post(addFriend)

// router
//   .route('/:friendId/friends/:friendId')
//   .delete(deleteFriend)

module.exports = router;
