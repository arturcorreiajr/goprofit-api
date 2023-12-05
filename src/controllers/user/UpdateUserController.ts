import {Request, Response} from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserService'

class UpdateUserController{
  async handle(req: Request, res: Response){
    const id = req.user_id
    
    let { name, email } = req.body;
    name = name.toUpperCase();
    
    const updateUserService = new UpdateUserService();

    if(!req.file){
      throw new Error("error upload file")
    }else{
      const { originalname, filename: avatar } = req.file;

      const user = await updateUserService.execute({
        id,
        name,
        email,
        avatar
      });

      return res.json(user);
    }

  }
}

export { UpdateUserController }