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
export default class Haven {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name: string;
    @Column({unique:true})
    email: string;
    @Column({unique:true})
    phone: string;
    @Column()
    password: string;    
    @OneToOne(() => Address , {
        nullable: true,
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    address?: Address;
    @OneToMany(()=>Pet,(pet)=>pet.haven,{eager: true,})
    pets!:Array<Pet>;

    constructor(
        name: string,
        email: string,
        phone: string,
        password: string,
        address?: Address
    ) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async encryptPassword(password:string){
        this.password = generateEncryptedPasswowrd(this.password); 
    } 
}