import {Request, Response} from 'express'
import { ListType1Service } from '../../services/type1/ListType1Service'

class ListType1Controller{
  async handle(req: Request, res: Response){
    const listType1Service = new ListType1Service();

    const type1 = await listType1Service.execute();

    return res.json(type1);

  }
}

export { ListType1Controller }