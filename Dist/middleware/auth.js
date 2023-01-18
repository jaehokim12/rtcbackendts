"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        token = token.replace(/^Bearer\s+/, '');
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.TOKEN_KEY}`);
        const decode = jsonwebtoken_1.default.decode(token);
        req.user = decode;
    }
    catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};
exports.default = verifyToken;
//# sourceMappingURL=auth.js.map