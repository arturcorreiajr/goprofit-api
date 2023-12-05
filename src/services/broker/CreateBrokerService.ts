import prismaBroker from '../../prisma'
import * as util from '../../util'

interface BrokerRequest{
  name: string;
  color: string;
}

class CreateBrokerService{
  async execute({ name, color }: BrokerRequest){
    name = name.toUpperCase();
    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const brokerAlreadyExists = await prismaBroker.broker.findFirst({
      where:{
        name: name
      }
    })

    if(brokerAlreadyExists){
      console.log(util.getTimeStamp()+' [ WARNING ] - [ GOP-008 ] Broker "'+name+'" already exists!')
      throw new Error("[ GOP-008 ] - Broker already exists!")
    }

    const broker = await prismaBroker.broker.create({
      data:{
        name: name,
        color: color
      },
      select:{
        id: true,
        name: true,
        color: true
      }

      
    })

    console.log(util.getTimeStamp()+' [ INFO ] - Broker "'+broker.name+'","'+broker.color+'" has been added!')
    return broker;
  }
}

export { CreateBrokerService }