const exp = {}
const model = require('../models/index')

exp.index = (req, res) => {
    model.indexModel().then(result => {
        res.status(200).json(result)
    })
}

module.exports = exp