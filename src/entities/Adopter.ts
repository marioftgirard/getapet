// Adotante.ts
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import Pet from "./Pet";
import { generateEncryptedPasswowrd } from "../utils/crypt";

@Entity()
export default class Adopter {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column({unique:true})
    phone: string;
    @Column({ nullable: true })
    photo?: string;
    @OneToOne(() => Address , {
        nullable: true,
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    address?: Address;
    @OneToMany(()=>Pet,(pet)=>pet.adopter,{eager: true,})
    pets!:Array<Pet>;

    constructor(
        name: string,
        password: string,
        phone: string,
        photo?: string,
        address?: Address
    ) {
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.phone = phone;
        this.address = address;
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async encryptPassword(password:string){
        this.password = generateEncryptedPasswowrd(this.password); 
    } 
}