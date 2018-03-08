'use strict ';

const router = require('express').Router()
const { Radors } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Radors.findAll()
        .then(radorss => res.json(radorss))
        .catch(next)
})

router.get('/:radorsId', (req, res, next) => {
    const id = req.params.radorsId
    Radors.findById(id)
        .then(radors => res.json(radors))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Radors.create(req.body)
        .then(radors =>
            res.status(201).json(radors)
        )
        .catch(next)
})

router.put('/:radorsId', (req, res, next) => {
    const id = req.params.radorsId
    Radors.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [radors]]) =>
            res.json(radors)
        )
        .catch(next)
})

router.delete('/:radorsId', (req, res, next) => {
    const id = req.params.radorsId
    Radors.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
