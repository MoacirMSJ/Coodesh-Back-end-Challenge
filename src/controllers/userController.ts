import {createOne} from '../services/userService'
import {Request, Response} from 'express'

const newUser = async (req: Request, res: Response) => {
    const response = await createOne(req.body);
    return res.status(200).json(response);
}

export default {newUser};