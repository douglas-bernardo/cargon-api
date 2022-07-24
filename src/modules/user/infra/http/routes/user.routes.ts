import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', userController.index);
usersRouter.post('/create', userController.create);

export default usersRouter;
