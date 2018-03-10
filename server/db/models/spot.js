'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Spot = db.define('spot', {
    latitude: {
        type: Sequelize.DECIMAL,
    },
    longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
})

module.exports = Spot
