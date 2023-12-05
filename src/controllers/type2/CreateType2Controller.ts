import {Request, Response} from 'express'
import { CreateType2Service } from '../../services/type2/CreateType2Service'

class CreateType2Controller{
  async handle(req: Request, res: Response){
    const { id_type1, name } = req.body;
    const createType2Service = new CreateType2Service();

    const type2 = await createType2Service.execute({
      id_type1,
      name
    });

    return res.json(type2)
  }
}

export { CreateType2Controller }