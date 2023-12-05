import {Request, Response} from 'express'
import { ListType2Service } from '../../services/type2/ListType2Service'

class ListType2Controller{
  async handle(req: Request, res: Response){
    const listType2Service = new ListType2Service();

    const type2 = await listType2Service.execute();

    return res.json(type2);

  }
}

export { ListType2Controller }