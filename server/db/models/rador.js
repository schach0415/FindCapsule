'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Rador = db.define('rador', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: {msg: 'Invalid URL, try again'}
        }
    },
    sound: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: {msg: 'Invalid URL, try again'}
        }
    },
    accuracy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    }
})

module.exports = Rador
