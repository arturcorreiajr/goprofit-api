import prismaType2 from '../../prisma'

interface type2Request{
  id: string;
  id_type1: string;
  name: string;
}

class UpdateType2Service{
  async execute({ id, id_type1, name }: type2Request){
    name = name.toUpperCase();

    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    const type2 = await prismaType2.type2.update({
      where:{
        id: id
      },
      data:{
        id: id,
        id_type1: id_type1,
        name: name,
      }
    })


    return type2;
  }
}

export { UpdateType2Service }