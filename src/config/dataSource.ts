import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import Pet from "../entities/Pet";
import Adopter from "../entities/Adopter";
import Address from "../entities/Address";
import Haven from "../entities/Haven";

export const APPDS = new DataSource(
    {
        type:"sqlite",
        database: "./src/config/database.sqlite",
        entities:[Pet, Adopter,Address,Haven],
        synchronize:true,
        migrations:[],
        subscribers:[],
        logging:false,
    }
);