import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Session } from "./Session"
import { Company } from "./Company"

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    description: string
    @Column()
    language: string
    @Column()
    category: string
    @Column()
    targetAudience: string
    @Column()
    picture: string

    @OneToMany(() => Session, session => session.event, {onDelete: 'CASCADE',})
    sessions: Session[]
    @ManyToOne(() => Company, company => company.events, {onDelete: 'CASCADE',})
    company: Company
}