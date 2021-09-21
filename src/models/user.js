const mongoose = require('../infra/database')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type:String,
        required: true,
        select: false,
        set: value =>
            crypto
                .createHash('md5')
                .update(value)
                .digest('hex')
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
},
{
    timestamps: true,
    toJSON: { virtuals : true , getters : true},
    toObject : { virtuals : true , getters : true}
}


);

const User = mongoose.model('User', UserSchema);

module.exports = User;