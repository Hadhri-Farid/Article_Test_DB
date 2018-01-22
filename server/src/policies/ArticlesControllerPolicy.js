const Joi = require('joi')

module.exports = {
    // J'ai essayé de ne pas déclarer text et img, je voulais juste une validation sur le title pour ne pas avoir 2 fois le même titre,
    // mais je crois que je suis obligé de déclarer à Joi toute la structure de ma bdd
    createArticle (req, res, next) {
        const schema = {
            title: Joi.string(),
            text: Joi.string(),
            img: Joi.string()
        }
        // req.body.title ne fonctionne pas, je n'ai pas compris comment fonctionne Joi (je l'utilise certainement à un endroit ou je peux m'en passer)
        // edit: Ok cette page ne sert à rien, j'aurai pu juste catch une erreur ( ou cas ou même si j'arrive pas à imaginer le type d'erreur) par manque de temps je vais continuer avec
        // je retire les Unique : true pour eviter d'avoir des problemes par la suite
        const {error, value} = Joi.validate(req.body, schema)

            if(error) {
                switch (error.details[0].context.key) {
                    case 'title':
                    res.status(400).send({
                    error: 'Veuillez mettre un titre'
                    })
                    default:
                        res.status(400).send({
                            error: 'Un probleme est survenu veuillez contacter Mr Toto'
                        })
                }
            } else {
            next()
            }
        }
}