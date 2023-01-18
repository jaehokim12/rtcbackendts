import express, { Request, Response } from 'express';
import http from 'http';
import { registerSocketServer } from './socketServer';

import { router } from './routes/authRoutes';

import { friendinvitationrouter } from './routes/friendInvitationRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);
app.use('/api/friend-invitation', friendinvitationrouter);

const server = http.createServer(app);
registerSocketServer(server);
server.listen(process.env.API_PORT, () => {
    console.log(`server listensng port:${process.env.API_PORT}`);
});
