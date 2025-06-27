const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const config = require('./config')
const routes = require('./routes/index')

nunjucks.configure(['pages', 'views'], {
    express: app,
    ...config.nunjucks
})
app.set('view engine', 'njk')

app.use('/', routes)

app.listen(config.app.port, () => {
    console.log(`Listening on port ${config.app.port}...`)
})


