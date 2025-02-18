import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"
import { Seat } from "./Seat"

@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    capacity: number

    @OneToMany(() => Seat, seat => seat.region, {onDelete: 'CASCADE',})
    seats: Seat[]
    @ManyToOne(() => Room, room => room.regions, {onDelete: 'CASCADE',})
    room: Room
}