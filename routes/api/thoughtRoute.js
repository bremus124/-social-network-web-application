const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);

// /api/users/:id
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  
router
  .route('/thought/:thoughtId/reactions')
  .post(addReaction)

module.exports = router;