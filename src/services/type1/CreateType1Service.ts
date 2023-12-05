import prismaType1 from '../../prisma'
import * as util from '../../util'

interface Type1Request{
  name: string;
}

class CreateType1Service{
  async execute({ name }: Type1Request){
    name = name.toUpperCase();
    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const type1AlreadyExists = await prismaType1.type1.findFirst({
      where:{
        name: name
      }
    })

    if(type1AlreadyExists){
      console.log(util.getTimeStamp()+' [ WARNING ] - [ GOP-008 ] Type1 "'+name+'" already exists!')
      throw new Error("[ GOP-008 ] - Type1 already exists!")
    }

    const type1 = await prismaType1.type1.create({
      data:{
        name: name
      },
      select:{
        id: true,
        name: true
      }

      
    })

    console.log(util.getTimeStamp()+' [ INFO ] - Type1 "'+type1.name+'" has been added!')
    return type1;
  }
}

export { CreateType1Service }