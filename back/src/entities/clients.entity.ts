import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn({ type: "date" })
    registration_date: string;

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[];
}