const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
  },
  { timestamps: true }
);

const User = model('User', schema);

module.exports = User;
