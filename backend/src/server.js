// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-8h5vf.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Rotas
app.use(cors());
app.use(express.json());
app.use(routes);

//Porta para ser executada
app.listen(3333);