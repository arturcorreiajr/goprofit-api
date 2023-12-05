import {Request, Response} from 'express'
import { GetDetailUserService } from '../../services/user/GetDetailUserService'

class GetDetailuserController{
  async handle(req: Request, res: Response){

    const user_id = req.body.id;
    
    const getDetailUserService = new GetDetailUserService();

    const user = await getDetailUserService.execute(user_id);

    return res.json(user);

  }
}

export { GetDetailuserController  }