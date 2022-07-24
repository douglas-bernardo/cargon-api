import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('Email already exists');
    }

    return this.userRepository.create({ name, email, password });
  }
}

export default CreateUserService;
