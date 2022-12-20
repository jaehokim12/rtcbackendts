import express, { Request, Response } from 'express';
import authControllers from '../../controllers';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/register', authControllers.registerController);
router.post('/login', authControllers.loginController);
router.get('/socket', (req, res) => {
    res.send('request tests');
});
router.get('/test', auth, (req, res) => {
    res.send('request passed');
});

export default router;
