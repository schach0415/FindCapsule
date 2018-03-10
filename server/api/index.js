const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'))
router.use('/capsules', require('./capsules'))
router.use('/radars', require('./radars'))
router.use('/contents', require('./contents'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
