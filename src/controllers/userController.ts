import {createOne, getOne, getMany, deleteOne, updateOne} from '../services/userService'
import {Request, Response} from 'express'

const newUser = async (req: Request, res: Response) => {
    const response = await createOne(req.body);
    return res.status(200).json(response);
}

const getUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const response = await getOne(userId);
    return res.status(200).json(response);
}

const getAllUsers = async (req: Request, res: Response) => {
    const response = await getMany();
    return res.status(200).json(response);
}

const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const response = await deleteOne(userId);
    return res.status(200).json(response);
}

const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const response = await updateOne(userId, req.body);
    return res.status(200).json(response);
}

export default {newUser, getUser, getAllUsers, deleteUser, updateUser};