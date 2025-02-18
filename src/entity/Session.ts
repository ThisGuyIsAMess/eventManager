import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"
import { Event } from "./Event"
import { Seat } from "./Seat"

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @OneToMany(() => Seat, seat => seat.session, {onDelete: 'CASCADE',})
    seats: Seat[]
    @ManyToOne(() => Room, room => room.sessions, {onDelete: 'CASCADE',})
    room: Room
    @ManyToOne(() => Event, event => event.sessions, {onDelete: 'CASCADE',})
    event: Event                                    
}