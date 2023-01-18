"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = exports.findUser = void 0;
exports.findUser = 'select mail from user where mail=?';
exports.insertUser = 'insert into user (username,mail,password) value(?,?,?)';
//# sourceMappingURL=registerQuery.js.map