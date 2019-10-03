// Imports

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');  

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
/*
    Metodos para rotas
    GET => Resgatar informação
    POST => Criar informação    
    PUT => Atualizar informação
    DELETE => Deletar infomar
*/
/*
    Comandos:
    req.query => Acessar query params (filtros)
    req.params => Acessar route params (para edção e delete)
    req.doby = Acessar corpor da requisição
*/

// Minhas Rotas

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

// Export
module.exports = routes;

