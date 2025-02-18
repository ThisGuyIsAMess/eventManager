import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Region } from "./Region"
import { Session } from "./Session"
import { Company } from "./Company"

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Region, region => region.room, {onDelete: 'CASCADE',})
    regions: Region[]
    @OneToMany(() => Session, session => session.room, {onDelete: 'CASCADE',})
    sessions: Session[]
    @ManyToOne(() => Company, company => company.rooms, {onDelete: 'CASCADE',})
    company: Company
}