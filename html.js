const http = require("http");
http.createServer((_, res) => res.end("bot is ready")).listen(8080)