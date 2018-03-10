'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Spot = db.define('spot', {
    isCollected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL,
    },
    longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
})

module.exports = Spot
