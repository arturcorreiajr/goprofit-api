import {Request, Response} from 'express'
import { ListBrokerService } from '../../services/broker/ListBrokerService'

class ListBrokerController{
  async handle(req: Request, res: Response){
    const listBrokerService = new ListBrokerService();

    const broker = await listBrokerService.execute();

    return res.json(broker);

  }
}

export { ListBrokerController }