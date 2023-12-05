import prismaType1 from "../../prisma";

class DetailType1Service{
  async execute(id: string){

    const type1 = await prismaType1.type1.findFirst({
      where:{
        id: id
      },
    })

    return type1;
  }
}

export { DetailType1Service }