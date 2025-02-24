import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Ticket } from "./Ticket"
import { Type } from "./Type"
import { Room } from "./Room"

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    price: number
    @Column()
    seatNum: number

    @OneToMany(() => Ticket, ticket => ticket.seat)
    tickets: Ticket[]
    @ManyToOne(() => Room, room => room.seats)
    room: Room
    @ManyToOne(() => Type, type => type.seats)
    type: Type
}