import {Request, response, Response} from 'express'
import { UpdateBrokerService } from '../../services/broker/UpdateBrokerService'

class UpdateBrokerController{
  async handle(req: Request, res: Response){
    const { id, name, color } = req.body;

    const updateBrokerService = new UpdateBrokerService();

    const broker = await updateBrokerService.execute({
      id,
      name,
      color
    });

    return res.json(broker)
  }
}

export { UpdateBrokerController }