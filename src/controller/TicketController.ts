import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Ticket } from "../entity/Ticket"
import { Seat } from "../entity/Seat"

export class TicketController {

    private ticketRepository = AppDataSource.getRepository(Ticket)
    private seatRepository = AppDataSource.getRepository(Seat)

    async getOne(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const ticket = await this.ticketRepository.findOne({
            where: { id: id },
            relations: ['seats', 'user']
        })

        if (!ticket) {
            return "The event does not exist!"
        }
        return ticket
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const ticketData = request.body;
        console.log(ticketData);
        const { purchaseDate, totalPrice, user, seats } = ticketData;

        const ticket = Object.assign(new Ticket(), {
            purchaseDate,
            totalPrice,
            user,
            seats
        })

        const savedTicket = await this.ticketRepository.save(ticket);
        for (const seatData of seats) {
            const seat = await this.seatRepository.findOneBy({ id: seatData.id });
            seat.ticket = savedTicket;

            await this.seatRepository.save(seat);
        }
        return savedTicket;
    }
}