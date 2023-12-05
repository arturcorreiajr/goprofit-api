import prismaBroker from "../../prisma";

class ListBrokerService{
  async execute(){

    const broker = await prismaBroker.broker.findMany()

    return broker;

  }
}

export { ListBrokerService }