import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Session } from "./Session"
import { Company } from "./Company"
import { Seat } from "./Seat"

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Seat, seat => seat.room)
    seats: Seat[]
    @OneToMany(() => Session, session => session.room)
    sessions: Session[]
    @ManyToOne(() => Company, company => company.rooms)
    company: Company
}