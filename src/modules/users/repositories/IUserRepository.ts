import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/http/database/entities/User';

export default interface IUserRepository {
  findAll(): Promise<User[]>;
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
