
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export default class Address {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    state: string;
    @Column()
    city: string;
    
  
    constructor(
      state: string,
      city: string,
      
    ) {
      this.state = state;
      this.city = city;
      
    }
  }