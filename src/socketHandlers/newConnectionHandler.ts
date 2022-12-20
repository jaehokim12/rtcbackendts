import * as serverStore from '../serverStore';
// handler
export const newConnectionHandler = async (socket: any, io: any) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    });
};
