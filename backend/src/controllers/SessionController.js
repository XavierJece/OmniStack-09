// Imports
const User = require('../models/User')

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
    async store(req, res) {
        const { email } = req.body; 

        let user = await User.findOne({email});

        if(!user){
            const user = await User.create({
                email
            });
        }

        return res.json(user);
    }
};