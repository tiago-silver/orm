import { Request, Response } from "express"
import {prisma} from "@/prisma"

class UsersController {
  async index(request: Request, response: Response) {

    const users = await prisma.user.findMany()
    return response.json(users)
  }

  async create(request: Request, response: Response) {
    const { name, email} = request.body

    // Insere os dados no banco de dados utilizando o prisma
    await prisma.user.create({ data : {name, email}})
    return response.status(201).json({message: "ok"})
    
  }

  async show(request: Request, response: Response) {
    const { id} = request.params
    const user = await prisma.user.findUnique({where: {id}})
    return response.json(user)
  }
}

export { UsersController }
