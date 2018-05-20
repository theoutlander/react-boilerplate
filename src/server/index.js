let server = require('./web.server')

let webserver = new server()
webserver.start(() => {
  console.log('Webserver started!')
})
