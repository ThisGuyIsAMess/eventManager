import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Seat } from "./Seat"

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    purchaseDate: string
    @Column()
    totalPrice: number

    @OneToMany(() => Seat, seat => seat.ticket, {onUpdate: 'CASCADE',})
    seats: Seat[]
    @ManyToOne(() => User, user => user.tickets)
    user: User
}