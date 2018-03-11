'use strict ';

const router = require('express').Router()
const { Participant } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Participant.findAll()
        .then(participants => res.json(participants))
        .catch(next)
})

router.get('/:participantId', (req, res, next) => {
    const id = req.params.participantId
    Participant.findById(id)
        .then(participant => res.json(participant))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Participant.create(req.body)
        .then(participant =>
            res.status(201).json(participant)
        )
        .catch(next)
})

router.put('/:participantId', (req, res, next) => {
    const id = req.params.participantId
    Participant.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [participant]]) =>
            res.json(participant)
        )
        .catch(next)
})

router.delete('/:ParticipantId', (req, res, next) => {
    const id = req.params.participantId
    Participant.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
