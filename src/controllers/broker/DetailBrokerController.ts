import {Request, Response} from 'express'
import { DetailBrokerService } from '../../services/broker/DetailBrokerService'

class DetailBrokerController{
  async handle(req: Request, res: Response){
    
    const id = req.body.id;
    
    const detailBrokerService = new DetailBrokerService();

    const response = await detailBrokerService.execute(id);

    return res.json(response);

  }
}

export { DetailBrokerController  }