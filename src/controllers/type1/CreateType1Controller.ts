import {Request, Response} from 'express'
import { CreateType1Service } from '../../services/type1/CreateType1Service'

class CreateType1Controller{
  async handle(req: Request, res: Response){
    const { name } = req.body;
    const createType1Service = new CreateType1Service();

    const type1 = await createType1Service.execute({
      name,
    });

    return res.json(type1)
  }
}

export { CreateType1Controller }