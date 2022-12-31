import express, { Request, Response } from 'express';
import authControllers from '../controllers';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/register', authControllers.registerController);
router.post('/login', authControllers.loginController);

export default router;
