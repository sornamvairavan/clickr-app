const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const photosRouter = require('./photos.js')
const commentsRouter = require('./comments')
const likesRouter = require('./likes')

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.use('/photos', photosRouter)

router.use('/comments', commentsRouter)

router.use('/likes', likesRouter)

module.exports = router;
