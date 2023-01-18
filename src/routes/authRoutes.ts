import express, { Request, Response } from 'express';
import * as loginController from '../controllers/login';
import * as registerController from '../controllers/register';

export const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/test', (req, res) => {
    console.log('test req', req);
    res.send('test ok ');
});
