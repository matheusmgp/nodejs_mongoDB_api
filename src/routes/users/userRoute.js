const express = require('express')
const UserController = require('../../controllers/UserController')

const routes = express.Router();

routes.get('/users', UserController.findAll);
routes.post('/users', UserController.create);
routes.put('/users/:_id', UserController.update);
routes.get('/users/:_id', UserController.findById);
routes.delete('/users/:_id', UserController.delete);

module.exports = routes;