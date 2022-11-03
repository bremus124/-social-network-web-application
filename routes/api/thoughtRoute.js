const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/user
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:id
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)


router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);


module.exports = router;