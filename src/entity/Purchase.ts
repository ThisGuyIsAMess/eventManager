import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Ticket } from "./Ticket"

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    purchaseDate: string
    @Column()
    totalPrice: number

    @OneToMany(() => Ticket, ticket => ticket.purchase)
    tickets: Ticket[]
    @ManyToOne(() => User, user => user.purchases)
    user: User
}