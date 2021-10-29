const http = require('http');
var log = require('./log.js')

http.createServer(function (request, response) {
    console.log(request.url)
    if (request.url == '/index') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h1> Home Page </h1></body></html>')
    } else if (request.url == '/aboutus') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h1> About Us </h1></body></html>')
    } else if (request.url == '/contact') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h1> Contact Us </h1></body></html>')
    }
    
    response.end()
}).listen(5000)

log.information('Server is running...')


