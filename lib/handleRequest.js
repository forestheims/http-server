export const handleRequest = (request, socket) => {
    const lines = request.split('\n');
    const [method, path, protocol] = lines[0].split(' ');
    console.log('lines :>> ', method);
    if(method === 'GET') {
        const body = 'This is a string body!';
        socket.write(`\
HTTP/1.1 200 Ok
Content-Type: text/plain
Content-Length: ${body.length}

${body}\
`)
    }
};
