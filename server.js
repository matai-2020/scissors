const express = require('express') // Import express for web servers
const hbs = require('express-handlebars') // Import handlebars for partials
const routes = require('./routes')

const server = express() // Create server

module.exports = server // export server for routes

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({
    extended: false
}))

server.use('/', routes)
