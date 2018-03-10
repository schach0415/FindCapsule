'use strict ';

const router = require('express').Router()
const { Radar } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Radar.findAll()
        .then(radars => res.json(radars))
        .catch(next)
})

router.get('/:radarId', (req, res, next) => {
    const id = req.params.radarId
    Radar.findById(id)
        .then(radar => res.json(radar))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Radar.create(req.body)
        .then(radar =>
            res.status(201).json(radar)
        )
        .catch(next)
})

router.put('/:radarId', (req, res, next) => {
    const id = req.params.radarId
    Radar.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [radar]]) =>
            res.json(radar)
        )
        .catch(next)
})

router.delete('/:radarId', (req, res, next) => {
    const id = req.params.radarId
    Radar.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
