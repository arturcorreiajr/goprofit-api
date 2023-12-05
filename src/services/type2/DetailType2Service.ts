import prismaType2 from "../../prisma";

class DetailType2Service{
  async execute(id: string){

    const type2 = await prismaType2.type2.findFirst({
      where:{
        id: id
      },
    })

    return type2;
  }
}

export { DetailType2Service }