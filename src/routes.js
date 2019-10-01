const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //se fossem várias imagens, poderia usar upload.arr()

routes.get('/dashboards', DashboardController.show);

module.exports = routes;