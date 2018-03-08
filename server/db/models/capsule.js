'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Capsule = db.define('capsule', {
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
    availability: {
        type: Sequelize.ENUM('available', 'pending', 'limited'),
        defaultValue: 'pending',
        allowNull: false
    },
    pattern: {
        type: Sequelize.ENUM('quentity', 'duration'),
        defaultValue: 'quentity',
        allowNull: false
    },
    usage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        },
    },
    startingPoint: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
        allowNull: false
    },
    isRandom: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    range: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            notEmpty: true,
            min: 0
        }
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Capsule
