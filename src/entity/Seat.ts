import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Ticket } from "./Ticket"
import { Session } from "./Session"
import { Region } from "./Region"

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    price: number
    @Column()
    seatNum: number

    @ManyToOne(() => Ticket, ticket => ticket.seats, {onDelete: 'CASCADE',})
    ticket: Ticket
    @ManyToOne(() => Session, session => session.seats, {onDelete: 'CASCADE',})
    session: Session
    @ManyToOne(() => Region, region => region.seats, {onDelete: 'CASCADE',})
    region: Region
}