import {Request, response, Response} from 'express'
import { UpdateType1Service } from '../../services/type1/UpdateType1Service'

class UpdateType1Controller{
  async handle(req: Request, res: Response){
    const { id, name } = req.body;

    const updateType1Service = new UpdateType1Service();

    const type1 = await updateType1Service.execute({
      id,
      name
    });

    return res.json(type1)
  }
}

export { UpdateType1Controller }