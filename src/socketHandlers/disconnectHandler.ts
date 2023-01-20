import * as serverStore from '../serverStore';

export const disconnectHandler = (socket: any) => {
    serverStore.removeConnectedUser(socket.id);
};
