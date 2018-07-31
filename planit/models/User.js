const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { 
    type: String, match: [/.+@.+\..+/, "Not a valid email"]
  },
  username: {
    type: String, unique: true, required: true, trim: true
    },
  password: {
     type: String, required: true 
    },
  // passwordConf: { 
  //   type: String, required: true 
  // },
  name: { 
    type: String,
    required: true 
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }


});


module.exports = User = mongoose.model('users', UserSchema);
