import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

Entity("contacts")
export class Contact {
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

    @ManyToOne(() => Client, client => client.contacts)
    @JoinColumn()
    client?: Client
}
