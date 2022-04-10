const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
    {
        userName: { type: 'string', unique: true },
        passWord: { type: 'string' },
        fullName: { type: 'string' },
        email: { type: 'string' }
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Users', user);
