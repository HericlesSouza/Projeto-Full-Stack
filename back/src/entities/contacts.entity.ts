import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", unique: true })
    full_name: string;

    @Column({ type: "varchar"})
    email: string;

    @Column({ type: "varchar" })
    phone: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @ManyToOne(() => Client, client => client.contacts, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'client_id' })
    client: Client
}
