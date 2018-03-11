'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Radar = db.define('radar', {
    name: {
        type: Sequelize.ENUM('diamond', 'gold', 'silver', 'bronze'),
        defaultValue: 'silver',
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: 'Radar is an object-detection system that uses radio waves to determine the range, angle, or velocity of objects. It can be used to detect aircraft, ships, spacecraft, guided missiles, motor vehicles, weather formations, and terrain. However, this radar is only design for detecting CAPSULES',
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.conquistanews.com.br/wp-content/uploads/2013/04/radar_gif-animado-3749582.gif',
        validate: {
          isUrl: {msg: 'Invalid URL, try again'}
        }
    },
    soundUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://soundbible.com/mp3/Radar%20Detector%20Beeps-SoundBible.com-892148482.mp3',
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

module.exports = Radar
