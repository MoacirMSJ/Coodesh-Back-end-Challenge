import { UserModel } from '../models/userSchema'
import {User} from '../protocols/user'

export const createOne = async (user: User): Promise<User> => {
  const userData = await UserModel.create(user);
  return userData;
}

export const getOne =  async (userId: string ) => {
  const userData = await UserModel.findOne({_id: userId });
  return userData;
}

export const getMany = async () => {
  const users = await UserModel.find();
  return users;
}