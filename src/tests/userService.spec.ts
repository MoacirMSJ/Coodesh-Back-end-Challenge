
import mongoose from 'mongoose';
import uri from '../../globalConfig.json'
import {createOne, getMany, getOne, deleteOne, updateOne} from '../services/userService';
import { UserModel } from '../models/userSchema'
import {userData} from './testData'

describe('User services ', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = mongoose.connect(uri.mongoUri, (err) => {
      if (err) {
          console.error(err);
          process.exit(1);
      }
  });
  });

  afterEach(async () =>  UserModel.remove()
 )

  afterAll(async () => {
    await mongoose.disconnect();
  });


  test('Create user: success', async () => {
    const response = await createOne(userData());
    console.log(response);
    expect(response).toEqual({ statusCode: 201, data: { message: "Usuário criado!"} });
  });

  test('Create user: failed', async () => {
    let user = userData();
    user.email= null;
    const response = await createOne(user);
    console.log(response);
    expect(response).toEqual({ statusCode: 400, data: { message: "Erro ao criar usuário!" } });
  });

  test('Find user: success', async () => {
    let user = await UserModel.create(userData());
    const response = await getOne(user._id);
    user = await UserModel.findById(user._id) 
    expect(response).toEqual({ statusCode: 200, data: user});
  });

  test('Find user: failed', async () => {
    let user = await UserModel.create(userData());
    const idIncorrect = '1';
    const response = await getOne(idIncorrect);
    expect(response).toEqual({ statusCode: 400, data: { message: "Erro ao buscar usuário!" } });
  });

  test('Find all users: success', async () => {
    await UserModel.create(userData());
    const response = await getMany();
    const users = await UserModel.find();
    expect(response).toEqual({ statusCode: 200, data: users});
  });

  test('Update user: success', async () => {
    let user = await UserModel.create(userData());
    user.email= "new_email@teste.com"
    const response = await updateOne(user._id, user); 
    expect(response).toEqual({ statusCode: 200, data: { message: "Usuário atualizado!" } });
  });

  test('Update user: failed', async () => {
    let user = await UserModel.create(userData());
    user.email= "new_email@teste.com"
    const idIncorrect = '1';
    const response = await updateOne(idIncorrect, user); 
    expect(response).toEqual({ statusCode: 400, data: { message: "Erro ao atualizar usuário!" } });
  });

  test('Delete user: success', async () => {
    let user = await UserModel.create(userData());
    const response = await deleteOne(user._id); 
    expect(response).toEqual({ statusCode: 200, data: { message: "Usuário deletado!" } });
  });

  test('Delete user: failed', async () => {
    const response = await deleteOne('1'); 
    expect(response).toEqual({ statusCode: 400, data: { message: "Erro ao deletar usuário!" } });
  });

});