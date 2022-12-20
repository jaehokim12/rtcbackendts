const connectedUsers = new Map();

export const addNewConnectedUser = ({ socketId, userId }: any) => {
    connectedUsers.set(socketId, { userId });
    console.log('newConneted users');
    console.log(connectedUsers);
};
export const removeConnetedUser = (socketId: any) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('new conneted users delete');
    }
};
