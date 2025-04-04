import { Router } from 'express';
import * as AuthController from '../controller/auth/AuthController.js';

const authRouter = Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/logout', AuthController.logout);

export default authRouter;
