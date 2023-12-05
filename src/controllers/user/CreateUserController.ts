import {Request, response, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
  async handle(req: Request, res: Response){
    let { name, email, password } = req.body;
    name = name.toUpperCase();

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    return res.json(user)
  }
}

export { CreateUserController }