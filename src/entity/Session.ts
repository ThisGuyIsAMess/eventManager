import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"
import { Event } from "./Event"
import { Seat } from "./Seat"
import { Ticket } from "./Ticket"

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @OneToMany(() => Ticket, ticket => ticket.session, {onDelete: 'CASCADE',})
    tickets: Ticket[]
    @ManyToOne(() => Room, room => room.sessions, {onDelete: 'CASCADE',})
    room: Room
    @ManyToOne(() => Event, event => event.sessions, {onDelete: 'CASCADE',})
    event: Event                                    
}