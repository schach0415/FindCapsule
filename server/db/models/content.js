'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    note: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    contentType: {
        type: Sequelize.ENUM(
            'sound',
            'video',
            'image',
            'letter',
            'coupon',
            'bitcoin',
            'website',
            'ticket',
            'findCapsule'
        ),
        defaultValue: 'image',
    },
    item: {
        type: Sequelize.STRING,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Content
