import CreateUserService from '@modules/user/services/CreateUserService';
import ListUsersService from '@modules/user/services/ListUsersService';
import { Request, Response } from 'express';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const listUserService = new ListUsersService(userRepository);

    const users = await listUserService.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const userRepository = new UserRepository();

    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
