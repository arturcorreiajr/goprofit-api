import prismaType2 from "../../prisma";

class ListType2Service{
  async execute(){

    const type2 = await prismaType2.type2.findMany()

    return type2;

  }
}

export { ListType2Service }