'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    purpose: {
        type: Sequelize.ENUM('holiday', 'special', 'pirate', 'play'),
        defaultValue: 'play',
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: {msg: 'Invalid URL, try again'}
        }
    }
})

module.exports = Event
