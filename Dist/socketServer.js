"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSocketServer = void 0;
const newConnectionHandler_1 = require("./socketHandlers/newConnectionHandler");
const disconnectHandler_1 = require("socketHandlers/disconnectHandler");
// import { getActiveConnections } from './serverStore';
const authSocket_1 = require("./middleware/authSocket");
// import { directMessageHandler } from './socketHandlers/directMessageHandler';
const serverStore_1 = require("./serverStore");
const socket_io_1 = require("socket.io");
const registerSocketServer = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });
    (0, serverStore_1.setSocketServerInstance)(io);
    io.use((socket, next) => {
        (0, authSocket_1.authSocket)(socket, next);
    });
    io.on('connection', (socket) => {
        console.log('server', socket);
        console.log('user connected');
        console.log(socket.id);
        (0, newConnectionHandler_1.newConnectionHandler)(socket, io);
        socket.on('disconnect', () => {
            (0, disconnectHandler_1.disconnectHandler)(socket);
        });
        // const datas = <any>[];
        // socket.on('direct-message', data => {
        //     // console.log('direct-message socket', socket);
        //     // datas.push(data);
        //     // let data: any;
        //     // console.log('datas', datas);
        //     datas.push(data);
        //     directMessageHandler(datas);
        // });
    });
    // setInterval(() => {
    //     directMessageHandler(socket, data);
    //   }, [1000 * 8]);
};
exports.registerSocketServer = registerSocketServer;
//# sourceMappingURL=socketServer.js.map