import CreateUserService from '@modules/users/services/CreateUserService';
import ListUsersService from '@modules/users/services/ListUsersService';
import { Request, Response } from 'express';
import UserRepository from '../database/repositories/UserRepository';

const userRepository = new UserRepository();

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUsersService(userRepository);

    const users = await listUserService.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
