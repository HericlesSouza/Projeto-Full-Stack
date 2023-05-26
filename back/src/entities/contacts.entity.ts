import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar" })
    full_name: string;

    @Column({ type: "varchar" })
    email: string;

    @Column({ type: "varchar" })
    phone: string;

    @CreateDateColumn({ type: "date" })
    registration_date: string;

    @ManyToOne(() => Client, client => client.contacts)
    client: Client
}
