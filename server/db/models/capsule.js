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
    quentity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    activateDate: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
        allowNull: false
    } //rename to active date and time
})

module.exports = Capsule
