const http = require("http")
const fs = require("fs")
const { url } = require("inspector")
const server = http.createServer()

server.listen(5500)

server.on("request", handleRequest)

function handleRequest(request, response) {
    console.log(request.url)
    if (request.url == "/youtube.com") {
        response.setHeader("location", "https:/" + request.url )
        response.statusCode=302
        response.end()
    }

    try {
        const fileContent = fs.readFileSync("." + request.url)
        response.end(fileContent)
    } catch (error) {
        response.statusCode = 404
        response.end("File not found... " + request.url)
    }
}