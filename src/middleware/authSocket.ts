import * as jwt from 'jsonwebtoken';

export const authSocket = (socket: any, next: any) => {
    const token = socket.handshake.auth?.token;
    // console.log('token', token);
    try {
        const decoded = jwt.verify(token, `${process.env.TOKEN_KEY}`);
        // const decoded = jwt.verify(token, 'adfb!23');
        socket.user = decoded;
        // console.log('socket.user', socket.user);
    } catch (err) {
        const socketError = new Error('NOT_AUTHORIZED');
        // console.log('errerererer', err);
        return next(socketError);
    }

    next();
};
