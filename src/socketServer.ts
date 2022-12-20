import { newConnectionHandler } from './socketHandlers/newConnectionHandler';
import { disconnectHandler } from './socketHandlers/disconnectHandler';
import { verifyTokenSocket } from '../src/api/middleware/authSocket';
import http from 'http';
import { Server } from 'socket.io';
export const registerSocketServer = (server: http.Server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });
    io.use((socket, next) => {
        console.log('socket.handshake.auth', socket.handshake.auth);
        verifyTokenSocket(socket, next);
    });
    io.on('connection', (socket: any) => {
        console.log('server', socket);
        console.log('user connected');
        console.log(socket.id);

        newConnectionHandler(socket, io);

        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
    });
};
