import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User(name, email, password);

    this.users.push(user);

    return user;
  }
}

export default UserRepository;
