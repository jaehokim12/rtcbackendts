import * as serverStore from '../serverStore';

export const disconnectHandler = (socket: any) => {
    console.log('socket.idsocket.id', socket.id);
    serverStore.removeConnectedUser(socket.id);
};
