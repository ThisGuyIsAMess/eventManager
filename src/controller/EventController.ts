import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Event } from "../entity/Event"

export class EventController {

    private eventRepository = AppDataSource.getRepository(Event)

    async getOne(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const event = await this.eventRepository.findOne({
            where: { id: id },
            relations: ['sessions', 'sessions.room', 'sessions.room.regions', 'sessions.room.regions.seats', 'sessions.room.regions.seats.ticket']
        })

        if (!event) {
            return "The event does not exist!"
        }
        return event
    }

    async getAll(request: Request, response: Response, next: NextFunction) {
        return this.eventRepository.find({
            relations: ['sessions', 'sessions.room', 'sessions.room.regions', 'sessions.room.regions.seats', 'sessions.room.regions.seats.ticket']
        })
    }
}