const mongoose = require('../../database');
const bcrypt = require('bcrypt');

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    max: 15
  },
  address: {
    type: String,
    required: true,
    max: 100
  },
  state: {
    type: String,
    required: true,
    max: 30
  },
  country: {
    type: String,
    required: true,
    max: 45
  },
}, {
  _id: false
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    secret: false,
  },
  passwordResetToken: {
    type: 'String',
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  contact: {
    type: contactSchema,
    required: true
  },
}, {
  timestamps: true,
  versionKey: false
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
