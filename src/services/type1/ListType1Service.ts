import prismaType1 from "../../prisma";

class ListType1Service{
  async execute(){

    const type1 = await prismaType1.type1.findMany()

    return type1;

  }
}

export { ListType1Service }