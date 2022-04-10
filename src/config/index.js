const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/btl_android_nhom4');
    console.log('Connect Successfully!');
  } catch (error) {
    console.log('Connect Farilly!');
  }
}

module.exports = { connect };
