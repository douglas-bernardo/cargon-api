import User from '../infra/http/database/entities/User';
import IUserRepository from '../repositories/IUserRepository';

class ListUsersService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export default ListUsersService;
