import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"
import { Event } from "./Event"

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    email: string
    @Column()
    password: string
    @Column()
    city: string

    @OneToMany(() => Room, room => room.company, {onDelete: 'CASCADE',})
    rooms: Room[]
    @OneToMany(() => Event, event => event.company, {onDelete: 'CASCADE',})
    events: Event[]
}