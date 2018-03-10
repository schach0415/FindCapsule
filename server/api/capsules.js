'use strict ';

const router = require('express').Router()
const { Capsule, Content, Spot } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Capsule.findAll()
        .then(capsule => res.json(capsule))
        .catch(next)
})

router.get('/:capsuleId', (req, res, next) => {
    const id = req.params.capsuleId
    Capsule.findById(id, {
        include: [
            { model: Content },
            { model: Spot }
        ]
    })
        .then(capsule => res.json(capsule))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Capsule.create(req.body)
        .then(capsule => {
            return Capsule.findById(capsule.id, {
                include: [
                    { model: Content },
                    { model: Spot }
                ]
            })
        })
        .then(capsule => res.status(201).json(capsule))
        .catch(next)
})

router.put('/:capsuleId', (req, res, next) => {
    const id = req.params.capsuleId
    Capsule.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [capsule]]) => {
            return Capsule.findById(capsule.id, {
                include: [
                    { model: Content },
                    { model: Spot }
                ]
            })
        })
        .then(capsule => res.json(capsule))
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
