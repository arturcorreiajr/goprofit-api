import {Request, Response} from 'express'
import { DetailType2Service } from '../../services/type2/DetailType2Service'

class DetailType2Controller{
  async handle(req: Request, res: Response){
    
    const id = req.body.id;
    
    const detailType2Service = new DetailType2Service();

    const response = await detailType2Service.execute(id);

    return res.json(response);

  }
}

export { DetailType2Controller  }