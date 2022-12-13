import express, { Request, Response } from 'express';
import router from './api/routes/authRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/auth', router);
app.listen(5002, () => {
    console.log(`server listensng port:${process.env.API_PORT}`);
});

export default app;
