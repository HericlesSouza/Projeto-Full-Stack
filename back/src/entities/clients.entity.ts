import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";
import { getRounds, hashSync } from "bcryptjs";
@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @OneToMany(() => Contact, contact => contact.client, {eager: true})
    contacts: Contact[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}