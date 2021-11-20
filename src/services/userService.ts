import { UserModel } from '../models/userSchema'
import {User} from '../protocols/user'

export const createOne = async (user: User): Promise<User> => {
  const userData = await UserModel.create(user);
  return userData;
}
