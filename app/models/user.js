/**
 * Created by triptoli on 4/30/2017.
 */
var mongoose = require('mongoose');
var dcrypt=require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, unique: true}
});
UserSchema.pre('save', function (next) {
    var user = this;
    dcrypt.hash(user.password, null, null, function (err, hash) {
        if (err)return next(err);
        user.password = hash;
        next();
    })
})

module.exports = mongoose.model('User', UserSchema);
