"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = void 0;
// export const findUser = 'select email as demail  from user';
exports.findUsers = 'select username as dusername, mail as dmail, password as dpassword from user where mail= ?';
//# sourceMappingURL=loginQuery.js.map