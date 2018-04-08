const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
}, {collection: 'roster'});

module.exports = mongoose.model('Student', studentSchema);