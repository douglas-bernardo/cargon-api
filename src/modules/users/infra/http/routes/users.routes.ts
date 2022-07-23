import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const usersRouter = Router();

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

const users: IUser[] = [];

usersRouter.post('/create', (request, response) => {
  const { name, email, password } = request.body;

  const user = {
    id: uuid(),
    name,
    email,
    password,
  };

  users.push(user);

  return response.json(user);
});

usersRouter.get('/', (request, response) => {
  return response.json({ users });
});

export default usersRouter;
