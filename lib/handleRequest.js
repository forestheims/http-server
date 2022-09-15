export const handleRequest = (request, socket) => {
    const [headerString, requestBody] = request.split('\r\n\r\n');
    const headers = headerString.split('\r\n');
    const [method, path, protocol] = headers[0].split(' ');
    if(method === 'GET' && path === '/') {
        const body = 'This is a string body!';
        socket.write(`\
HTTP/1.1 200 Ok
Content-Type: text/plain
Content-Length: ${body.length}

${body}\
`)
    } else if(method === 'GET' && path === '/html') {
        const body = `<html>
<body>

<h1>My First TCP socket Server</h1>
<p>An experiment.</p>

</body>
</html>`;
        socket.write(`\
HTTP/1.1 200 Ok
Content-Type: text/html
Content-Length: ${body.length}

${body}\
`)
    } else if(method === 'GET' && path === '/json') {
        const body = { id: '123', value: 26 };
        socket.write(`\
HTTP/1.1 200 Ok
Content-Type: application/json
Content-Length: ${JSON.stringify(body).length}

${JSON.stringify(body)}\
`)
    } else if(method === 'POST' && path === '/json') {
        const body = `Received: ${requestBody}`
        socket.write(`\
HTTP/1.1 200 Ok
Content-Type: application/json
Content-Length: ${body.length}

${body}\
`)
    } else {
        const body = 'Path not found'
        socket.write(`\
HTTP/1.1 404 Not Found
Content-Type: text/plain
Content-Length: ${body.length}

${body}\
`)
    }
};
