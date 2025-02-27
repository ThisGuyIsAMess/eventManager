import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Seat } from "./Seat"

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Seat, seat => seat.type)
    seats: Seat[]
}