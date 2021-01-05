const http = require('http')

http.createServer((req, res) => {
	res.write('hi')
	res.end()
}).listen(5000)