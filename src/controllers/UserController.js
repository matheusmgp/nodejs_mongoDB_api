const User = require('../models/user');

module.exports = {

    async findAll(req, res){
        const users = await User.find();
        res.json(users);
    },

    async findById(req, res){
        const { _id } = req.params
        const user = await User.findOne({ _id });
        res.json(user);
    },

    async create(req, res){
        const { name, email , password } = req.body
        let payload = { name, email, password }

        const user = await User.create(payload);
        res.json(user);
    },

    async update(req, res){
        const { _id, name, email , password } = req.body
        let payload = { name, email, password }

        const user = await User.findByIdAndUpdate({ _id }, payload, { new : true });
        res.json(user);
    },

    async delete(req, res){
        const { _id } = req.params
        const user = await User.findByIdAndDelete({ _id });
        res.json(user);
    },


}