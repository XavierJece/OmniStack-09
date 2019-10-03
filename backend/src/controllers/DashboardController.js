// Imports
const Spot = require('../models/Spot');
// const User = require('../models/User');

/**
 * Metodos
 * Index    => Exbir varias
 * Show     => Exibir um unica
 * Store    => Cria
 * Update   => Atuaizar
 * Destroy  => Apagar
 * 
 *  */ 

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const sposts = await Spot.find({ user: user_id });

        return res.json(sposts);
     }
};