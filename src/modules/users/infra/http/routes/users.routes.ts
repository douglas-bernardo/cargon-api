import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/create', userController.create);

usersRouter.get('/', userController.index);

export default usersRouter;
