'use strict ';

const router = require('express').Router()
const { Event, Capsule, Participant } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Event.findAll({
        include: [{ model: Capsule }]
    })
        .then(events => res.json(events))
        .catch(next)
})

router.get('/:eventId', (req, res, next) => {
    const id = req.params.eventId
    Event.findById(id, {
        include: [
            { model: Capsule },
            { model: Participant }
        ]
    })
        .then(event => res.json(event))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Event.create(req.body)
        .then(event => {
            return Event.findById(event.id, {
                include: [
                    { model: Capsule },
                    { model: Participant }
                ]
            })
        })
        .then(event =>
            res.status(201).json(event)
        )
        .catch(next)
})

router.put('/:eventId', (req, res, next) => {
    const id = req.params.eventId
    Event.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [event]]) => {
            return Event.findById(event.id, {
                include: [
                    { model: Capsule },
                    { model: Participant }
                ]
            })
        })
        .then(event => res.json(event))
        .catch(next)
})

router.delete('/:eventId', (req, res, next) => {
    const id = req.params.eventId
    Event.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
