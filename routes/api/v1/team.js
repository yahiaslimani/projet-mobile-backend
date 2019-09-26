let express = require('express')
let router = express.Router()
let Team = require('../../../models/index').Team
let Player = require('../../../models/index').Player

// FETCH all Teams
router.get('/', function (req, res) {
    Team.findAll().then(Categories => {
        res.send(Categories);
    });
})

// Find a Team by Id
router.get('/:id', function (req, res) {
    Team.findByPk(req.params.id).then(Teams => {
        res.send(Teams);
    })
})


// Post a Team
router.post('/', function (req, res) {
    Team.create({...req.body}).then(function (result) {
        res.send(result)
    })
})

// Update a Team
router.patch('/:id', function (req, res) {
    Team.findByPk(req.params.id).then(Team => {
        Team.update({...req.body}).then(function (result) {
            res.send(result)
        })
    })
})

// Find a Player By Team by Id
router.get('/:team_id/players', function (req, res) {
    Player.findAll({
        where: {team_id: req.params.team_id}
    }).then(Players => {
        res.send(Players);
    })
})

module.exports = router
