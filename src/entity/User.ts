import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Purchase } from "./Purchase"

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

    @OneToMany(() => Purchase, purchase => purchase.user)
    purchases: Purchase[]
}