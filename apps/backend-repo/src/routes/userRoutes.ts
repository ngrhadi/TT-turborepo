import { Router } from 'express';
import * as UserController from '../controller/user/UserController.js';

const userRouter = Router();

// GET user one
userRouter.get('/fetch-user-data/:id', UserController.getOneUser);

// UPDATE user
userRouter.put('/update-user-data/:id', UserController.updateUser);

// DELETE user
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;
