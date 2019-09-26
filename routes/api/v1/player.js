let express = require('express')
let router = express.Router()
let Player = require('../../../models/index').Player

// FETCH all Players
router.get('/', function (req, res) {
    Player.findAll().then(Players => {
        res.send(Players);
    });
})

// Find a Player by Id
router.get('/:id', function (req, res) {
    Player.findByPk(req.params.id).then(Players => {
        res.send(Players);
    })
})

// Post a Player
router.post('/', function (req, res) {
    Player.create({...req.body}).then(function (result) {
        res.send(result)
    })
})

// Update a Player
router.patch('/:id', function (req, res) {
    Player.findByPk(req.params.id).then(player => {
        player.update({...req.body}).then(function (result) {
            res.send(result)
        })
    })
})




// Delete a Player by Id
router.delete('/:id', function (req, res) {
    const id = req.params.id
    Player.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).send('deleted successfully a the player with id = ' + id);
    })
})

module.exports = router
