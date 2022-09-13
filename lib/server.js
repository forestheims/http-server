import chalk from 'chalk';
import net from 'net';

import { handleRequest } from './handleRequest.js';

export const serve = (host, port) => {
    const server = net.createServer((socket) => {
        console.log(chalk.bgCyan('[server]'), `Connection established on port ${socket.address().port}!`);

        socket.on('data', (buffer) => {
            const request = buffer.toString();
            console.log(chalk.bgCyan('[server]'), 'Got a request:', request);
            handleRequest(request, socket);
            console.log(chalk.bgCyan('[server]'), 'Response sent!');
        });

        socket.on('close', () => {
            console.log(chalk.bgCyan('[server]'), 'Socket closed.');
        });

        socket.on('error', (err) => {
            console.error(chalk.bgCyan('[server]'), 'Error with connection', err);
        });
    });

    server.listen(port, host, () => {
        console.log(chalk.bgCyan('[server]'), `Established server on ${host}:${port}`);
    });

    console.log(chalk.bgCyan('[server]'), `Listening to ${host}:${port}`);


    return server;
};
