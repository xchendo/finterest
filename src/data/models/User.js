const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please enter an email address',
    }
});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
UserSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('User', UserSchema);