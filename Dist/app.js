"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socketServer_1 = require("./socketServer");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const friendInvitationRoutes_1 = __importDefault(require("./routes/friendInvitationRoutes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api', authRoutes_1.default);
app.use('/api/friend-invitation', friendInvitationRoutes_1.default);
const server = http_1.default.createServer(app);
(0, socketServer_1.registerSocketServer)(server);
server.listen(process.env.API_PORT, () => {
    console.log(`server listensng port:${process.env.API_PORT}`);
});
//# sourceMappingURL=app.js.map