let player = require('./api/v1/player')
let team = require('./api/v1/team')


module.exports = function (app) {
    app.use('/api/v1/player',player)
    app.use('/api/v1/team',team)
}



