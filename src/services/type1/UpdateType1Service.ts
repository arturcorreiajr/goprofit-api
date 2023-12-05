import prismaType1 from '../../prisma'

interface type1Request{
  id: string,
  name: string;
}

class UpdateType1Service{
  async execute({ id, name }: type1Request){
    name = name.toUpperCase();

    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    const type1 = await prismaType1.type1.update({
      where:{
        id: id
      },
      data:{
        id: id,
        name: name,
      }
    })


    return type1;
  }
}

export { UpdateType1Service }