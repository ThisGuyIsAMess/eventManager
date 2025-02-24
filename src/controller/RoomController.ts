import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Room } from "../entity/Room"

export class RoomController {
    /*private roomRepository = AppDataSource.getRepository(Room)

    async getOne(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const room = await this.roomRepository.findOne({
            where: { id: id },
            relations: ['sessions', 'sessions.seats', 'sessions.seats.ticket', 'sessions.seats.region']
        })

        if (!room) {
            return "The room does not exist!"
        }
        return room
    }

    async getAll(request: Request, response: Response, next: NextFunction) {
        return this.roomRepository.find({
            relations: ['sessions', 'sessions.seats', 'sessions.seats.ticket', 'sessions.seats.region']
        })
    }*/

    /*import { Photo } from "./entity/Photo"
    import { AppDataSource } from "./index"

    const photoRepository = AppDataSource.getRepository(Photo)
    const photoToUpdate = await photoRepository.findOneBy({
        id: 1,
    })
    photoToUpdate.name = "Me, my friends and polar bears"
    await photoRepository.save(photoToUpdate)*/
}