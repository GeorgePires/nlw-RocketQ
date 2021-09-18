const express = require('express')
const questionControl = require('./controllers/questionControl')
const roomControl = require('./controllers/roomControl')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', roomControl.create)
route.get('/room/:room', roomControl.open)

route.post('/enter-room', roomControl.enter)

route.post('/question/create/:room', questionControl.create )
route.post('/question/:room/:question/:action', questionControl.index)

module.exports = route



