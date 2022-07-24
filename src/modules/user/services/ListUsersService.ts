import User from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

class ListUsersService {
  constructor(private userRepository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export default ListUsersService;
