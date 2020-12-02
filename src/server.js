// server
const PORT = process.env.PORT || 5500;
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks (template engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
