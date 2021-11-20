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

export const deleteOne = async (userId: string) => {
  const users = await UserModel.deleteOne({_id: userId});
  return users;
}

export const updateOne = async (userId: string, user: User) => {
  const users = await UserModel.findOneAndUpdate({ _id: userId}, user);
  return users;
}

export const createMany = async (userList: User[]) => {
  userList.forEach( async (user) => {
    const result = await UserModel.exists({id: user.id})
    if (!result) {
      await UserModel.create(user);
    }
    else {
      console.log('usuario já existe: ', user.name)
    }
  })
}