import * as serverStore from '../serverStore';

export const disconnectHandler = (socket: any) => {
    serverStore.removeConnetedUser(socket.id);
};
