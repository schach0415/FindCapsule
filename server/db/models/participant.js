'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Participant = db.define('participant', {
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        }
    },
})

module.exports = Participant
