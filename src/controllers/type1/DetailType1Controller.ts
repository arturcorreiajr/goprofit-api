import {Request, Response} from 'express'
import { DetailType1Service } from '../../services/type1/DetailType1Service'

class DetailType1Controller{
  async handle(req: Request, res: Response){
    
    const id = req.body.id;
    
    const detailType1Service = new DetailType1Service();

    const response = await detailType1Service.execute(id);

    return res.json(response);

  }
}

export { DetailType1Controller  }