import { UserModel } from '../models/userSchema'
import {User} from '../protocols/user'
import {HttpResponse} from '../protocols/http-helpers'

export const createOne = async (user: User): Promise<HttpResponse> => {
  try {
    const userData = await UserModel.create(user);
    return { statusCode: 201, data: { message: "Usuário criado!"} };
  } catch (error) {
    return { statusCode: 400, data: { message: "Erro ao criar usuário!" } };
  }
}

export const getOne =  async (userId: string ): Promise<HttpResponse> => {
  try {
    const userData = await UserModel.findOne({_id: userId });
    return { statusCode: 200, data: userData };
  } catch (error) {
    return { statusCode: 400, data: { message: "Erro ao buscar usuário!" } };
  }
}

export const getMany = async (): Promise<HttpResponse> => {
  try {
    const users = await UserModel.find();
    return { statusCode: 200, data: users };
  } catch (error) {
    return { statusCode: 400, data: { message: "Erro ao buscar usuários!" } };
  }
}

export const deleteOne = async (userId: string): Promise<HttpResponse> => {
  try {
    const users = await UserModel.deleteOne({_id: userId});
    return { statusCode: 200, data: { message: "Usuário deletado!" } };
  } catch (error) {
    return { statusCode: 400, data: { message: "Erro ao deletar usuário!" } };
  }
}

export const updateOne = async (userId: string, user: User): Promise<HttpResponse> => {
  try {
    const users = await UserModel.findOneAndUpdate({ _id: userId}, user);
    return { statusCode: 200, data: { message: "Usuário atualizado!" } };
  } catch (error) {
    return { statusCode: 400, data: { message: "Erro ao atualizar usuário!" } };
  }

}

export const createMany = async (userList: User[]) => {
  userList.forEach( async (user) => {
    const result = await UserModel.exists({id: user.id});
    if (!result) {
      await UserModel.create(user);
    }
    else {
      console.log('usuario já existe: ', user.name );
    }
  })
}