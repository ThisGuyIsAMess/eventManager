import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Seat } from "./Seat"
import { Session } from "./Session"
import { Purchase } from "./Purchase"

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Seat, seat => seat.tickets)
    seat: Seat
    @ManyToOne(() => Session, session => session.tickets)
    session: Session
    @ManyToOne(() => Purchase, purchase => purchase.tickets)
    purchase: Purchase
}