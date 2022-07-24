import User from '../infra/http/database/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    return this.userRepository.create({ name, email, password });
  }
}

export default CreateUserService;
