import prismaBroker from "../../prisma";

class DetailBrokerService{
  async execute(id: string){

    const team = await prismaBroker.broker.findFirst({
      where:{
        id: id
      },
    })

    return team;
  }
}

export { DetailBrokerService }