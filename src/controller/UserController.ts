import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {
    /*private userRepository = AppDataSource.getRepository(User)

    async getOne(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const user = await this.userRepository.findOne({
            where: { id: id },
            relations: ['tickets']
        })

        if (!user) {
            return "Unregistered user"
        }
        return user
    }

    async getAll(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find({ relations: ['tickets'] })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { dni, name, surname, email, password, birthdate, tickets } = request.body;

        const user = Object.assign(new User(), {
            dni,
            name,
            surname,
            email,
            password,
            birthdate,
            tickets
        })

        return this.userRepository.save(user)
    }*/

    //For update, just get user by id, and update it

    /*async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }*/

}