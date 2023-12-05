import prismaBroker from '../../prisma'

interface brokerRequest{
  id: string,
  name: string;
  color: string;
}

class UpdateBrokerService{
  async execute({ id, name, color }: brokerRequest){
    name = name.toUpperCase();

    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    const broker = await prismaBroker.broker.update({
      where:{
        id: id
      },
      data:{
        id: id,
        name: name,
        color: color
      }
    })


    return broker;
  }
}

export { UpdateBrokerService }