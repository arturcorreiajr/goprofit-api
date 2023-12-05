import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
  id: string;
  name: string;
  email: string;
  avatar: string;
}

class UpdateUserService{
  async execute({id, name, email, avatar }: UserRequest){

    if(!name){
      throw new Error("Name incorrect")
    }else if(!email){
      throw new Error("Email incorrect")
    }else if(!avatar){
      throw new Error("Avatar incorrect")
    }

    const user = await prismaClient.user.update({
      where: {
        id: id,  
      },
      data:{
        name: name,
        email: email,
        avatar: avatar
      }
    })



    return user;
  }
}

export { UpdateUserService }