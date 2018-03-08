'use strict ';

const router = require('express').Router()
const { Capsule } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Capsule.findAll()
        .then(capsule => res.json(capsule))
        .catch(next)
})

router.get('/:capsuleId', (req, res, next) => {
    const id = req.params.capsuleId
    Capsule.findById(id)
        .then(capsule => res.json(capsule))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Capsule.create(req.body)
        .then(capsule =>
            res.status(201).json(capsule)
        )
        .catch(next)
})

router.put('/:capsuleId', (req, res, next) => {
    const id = req.params.capsuleId
    Capsule.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [capsule]]) =>
            res.json(capsule)
        )
        .catch(next)
})

router.delete('/:capsuleId', (req, res, next) => {
    const id = req.params.capsuleId
    Capsule.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
