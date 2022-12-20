const jwt = require('jsonwebtoken');

const config = process.env;

export const verifyTokenSocket = (socket: any, next: any) => {
    // console.log('verifyTokenSocket socket', socket);

    const token = socket.handshake.auth?.token;
    console.log('log token ', token);

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        socket.user = decoded;
    } catch (err) {
        const socketError = new Error('NOT_AUTHORIZED');
        console.log('errerererer', err);
        return next(socketError);
    }

    next();
};
