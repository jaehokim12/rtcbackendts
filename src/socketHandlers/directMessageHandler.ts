import { getSocketServerInstance, getActiveConnections } from '../serverStore';

export const directMessageHandler = async (datas: any) => {
    try {
        const { receiverUserId, content } = datas;

        const io = getSocketServerInstance();

        io.emit('direct-message', datas);
    } catch (err) {
        console.log(err);
    }
};
