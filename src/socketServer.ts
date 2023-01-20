import { newConnectionHandler } from './socketHandlers/newConnectionHandler';
import { disconnectHandler } from './socketHandlers/disconnectHandler';
import { authSocket } from './middleware/authSocket';
import { directMessageHandler } from './socketHandlers/directMessageHandler';
import { setSocketServerInstance } from './serverStore';
import http from 'http';
import { Server, Socket } from 'socket.io';
import * as serverStore from './serverStore';

export const registerSocketServer = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    setSocketServerInstance(io);
    io.use((socket, next) => {
        authSocket(socket, next);
    });

    io.on('connection', (socket: any) => {
        newConnectionHandler(socket, io);
        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
        const datas = <any>[];

        socket.on('direct-message', (data: any) => {
            // console.log('direct-message socket', socket);
            // datas.push(data);
            // let data: any;
            // console.log('datas', datas);
            datas.push(data);
            directMessageHandler(datas);
        });
    });
    // setInterval(() => {
    //     directMessageHandler(socket, data);
    //   }, [1000 * 8]);
};
