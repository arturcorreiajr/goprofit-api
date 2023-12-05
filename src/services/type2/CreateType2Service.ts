import prismaType2 from '../../prisma'
import * as util from '../../util'

interface Type2Request{
  id_type1: string;
  name: string;
}

class CreateType2Service{
  async execute({ id_type1, name }: Type2Request){
    name = name.toUpperCase();
    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const type2AlreadyExists = await prismaType2.type2.findFirst({
      where:{
        name: name
      }
    })

    if(type2AlreadyExists){
      console.log(util.getTimeStamp()+' [ WARNING ] - [ GOP-008 ] Type2 "'+name+'" already exists!')
      throw new Error("[ GOP-008 ] - Type2 already exists!")
    }

    const type2 = await prismaType2.type2.create({
      data:{
        id_type1: id_type1,
        name: name
      }
      
    })

    console.log(util.getTimeStamp()+' [ INFO ] - Type2 "'+type2.name+'" has been added!')
    return type2;
  }
}

export { CreateType2Service }