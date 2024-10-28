import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumSpecies from "../enum/enumSpecies";
import Adopter from "./Adopter";
import EnumSizes from "../enum/enumSizes";
import Haven from "./Haven";

@Entity()
export default class Pet{

    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    name:string;
    @Column()
    specie:EnumSpecies;    
    @Column()
    bornDate:Date;
    @Column()
    adopted:boolean;   
    @ManyToOne(() => Adopter, (adopter) => adopter.pets)
    adopter!: Adopter | null;
    @ManyToOne(() => Haven, (haven) => haven.pets)
    haven?: Haven | null;
    @Column({nullable:true})
    size?:EnumSizes;

    constructor(name:string,specie:EnumSpecies,bornDate:Date,adopted:boolean, size:EnumSizes)
    {
        this.name = name;
        this.specie = specie;
        this.bornDate = bornDate;
        this.adopted = adopted;
        this.size = size; 
        

    }
    
}