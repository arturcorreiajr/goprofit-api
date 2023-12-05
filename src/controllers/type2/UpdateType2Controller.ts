import {Request, response, Response} from 'express'
import { UpdateType2Service } from '../../services/type2/UpdateType2Service'

class UpdateType2Controller{
  async handle(req: Request, res: Response){
    const { id, id_type1, name } = req.body;

    const updateType2Service = new UpdateType2Service();

    const type2 = await updateType2Service.execute({
      id,
      id_type1,
      name
    });

    return res.json(type2)
  }
}

export { UpdateType2Controller }