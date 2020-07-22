const db = require('../models');
const User = db.models.user;

exports.create = (req, res) => {
  if (!req.body.firstName) {
    res.status(400).send({ message: 'You need to specify a name' });
    return;
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    );
};
