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
            'text',
            'coupon',
            'bitcoin',
            'website'
        ),
        defaultValue: 'image',
    },
})
module.exports = Content
