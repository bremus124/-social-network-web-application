const {User, Thought} = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find()
          .then((userData) => res.json(userData))
          .catch((err) => res.status(500).json(err));
      },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
          .select('-__v')
          .then((userData) =>
            !userData
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(userData)
          )
          .catch((err) => res.status(500).json(err));
      },
      createUser({ body }, res) {
        User.create(body)
          .then(userData => res.json(userData))
          .catch(err => res.status(400).json(err));
      },

    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((userData) =>
            !userData
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(userData)
          )
          .catch((err) => res.status(500).json(err));
      },
    
    deleteUSer({params}, res) {
        User.findOneAndDelete({ _id:params.id })
          .then(userData => {
            if (!userData) {
                res.json(404).json({
                    message: 'No user found with this ID'
                });
                return
            }
            res.json(userData);
          })
          .catch(err => res.status(400).json(err));
    },

    addFriend({ params }, res) {
      User.findOneAndUpdate(
        { _id: params.id },
        { $addToSet: { friends: params.friendId } },
        { new: true }
      )
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err));
    },
    
    deleteFriend({ params }, res) {
      User.findOneAndUpdate(
        { _id: params.id },
        { $pull: { friends: params.friendId } },
        { new: true }
      )
        .then((userData) => {
          if (!userData) {
            res.status(404).json({ message: "no user found with this id" });
            return;
          }
          res.json(userData);
        })
        .catch((err) => res.status(400).json(err));
    },
  };
module.exports = userController;


















