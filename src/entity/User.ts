import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Ticket } from "./Ticket"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    dni: string

    @Column()
    name: string
    @Column()
    surname: string

    @Column()
    email: string
    @Column()
    password: string

    @Column()
    birthdate: Date

    @OneToMany(() => Ticket, ticket => ticket.user)
    tickets: Ticket[]
}