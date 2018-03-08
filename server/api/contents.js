'use strict ';

const router = require('express').Router()
const { Content } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Content.findAll()
        .then(content => res.json(content))
        .catch(next)
})

router.get('/:contentId', (req, res, next) => {
    const id = req.params.contentId
    Content.findById(id)
        .then(content => res.json(content))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Content.create(req.body)
        .then(content =>
            res.status(201).json(content)
        )
        .catch(next)
})

router.put('/:contentId', (req, res, next) => {
    const id = req.params.contentId
    Content.update(req.body, {
        where: { id },
        returning: true,
    })
        .then(([rowsUpdate, [content]]) =>
            res.json(content)
        )
        .catch(next)
})

router.delete('/:contentId', (req, res, next) => {
    const id = req.params.contentId
    Content.destroy({
        where: { id }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})
