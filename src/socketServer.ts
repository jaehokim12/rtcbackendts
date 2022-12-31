import { newConnectionHandler } from './socketHandlers/newConnectionHandler';
import { disconnectHandler } from './socketHandlers/disconnectHandler';
import { getActiveConnections } from './serverStore';
import { authSocket } from './middleware/authSocket';
import { directMessageHandler } from './socketHandlers/directMessageHandler';
import http from 'http';
import { Server, Socket } from 'socket.io';
import * as serverStore from './serverStore';
export const registerSocketServer = (server: http.Server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    serverStore.setSocketServerInstance(io);
    io.use((socket, next) => {
        authSocket(socket, next);
    });

    io.on('connection', (socket: Socket) => {
        // console.log('server', socket);
        // console.log('user connected');
        // console.log(socket.id);

        newConnectionHandler(socket, io);
        const datas = <any>[];

        socket.on('direct-message', data => {
            // console.log('direct-message socket', socket);
            // datas.push(data);
            // let data: any;
            // console.log('datas', datas);
            datas.push(data);
            directMessageHandler(datas);
        });

        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
    });
    // setInterval(() => {
    //     directMessageHandler(socket, data);
    //   }, [1000 * 8]);
};
