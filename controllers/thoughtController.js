const {Thought, User} = require('../models');

const thoughtController = {
        getAllThoughts(req, res) {
            Thought.find()
              .then((thoughtData) => res.json(thoughtData))
              .catch((err) => res.status(500).json(err));
          },
        getSingleThought({params}, res) {
            Thought.findOne({ _id: params.id })
              .select('-__v')
              .then((thoughtData) => {
                if (!thoughtData) {
                   res.status(404).json({ message: 'No thought with that ID' })
                   return
                }
                  res.json(thoughtData)
                })
              .catch(err => {
                res.status(500).json(err)});
          },
        createThought({params, body}, res) {
            Thought.create(body)
              .then((thoughtData) => res.json(thoughtData))
              .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
              });
          },
        updateThought(req, res) {
            Thought.findOneAndUpdate(
              { _id: req.params.id },
              { $set: req.body },
              { runValidators: true, new: true }
            )
              .then((thoughtData) =>
                !thoughtData
                  ? res.status(404).json({ message: 'No thought with this id!' })
                  : res.json(thoughtData)
              )
              .catch((err) => res.status(500).json(err));
          },
        
        deleteThought({params}, res) {
            Thought.findOneAndDelete({ _id: req.params.id })
              .then(thoughtData => {
                if (!thoughtData) {
                    res.json(404).json({
                        message: 'No thought found with this ID'
                    });
                    return
                }
                res.json(userData);
              })
              .catch(err => res.status(400).json(err));
        },
        addReaction({params, body}, res){
          Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$push: {reactions: body}},
            {new: true},
          )
          .populate({path: 'reactions', select: '-__v'})
          .select('-__v')
          .then(thoughtData => {
            if (!thoughtData) {
              res.status(404).json ({
                message: 'There is no thought with that id'
              });
              return;
            }
            res.json(thoughtData)
          })
          .catch(err => (err));
        }
    };
    module.exports = thoughtController;
