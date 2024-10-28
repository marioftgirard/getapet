import { AnyError, Repository } from "typeorm";
import { APPDS } from "../config/dataSource";
import IAdopterRepository from "./interfaces/IAdopterRepository";
import Adopter from "../entities/Adopter";
import Address from "../entities/Address";
import { BadRequest, NotFound } from "../utils/ErrorHandlers";

export default class AdopterRepository implements IAdopterRepository {


    private repository: Repository<Adopter>;

    private async checkPhone(phone: string) {
        return await this.repository.findOne({ where: { phone } });
    }

    constructor() {
        this.repository = APPDS.getRepository("Adopter");
    }

    async create(adopter: Adopter) {

        if (await this.checkPhone(adopter.phone)) {
            throw new BadRequest("Phone is alrealdy in use");
        }
        await this.repository.save(adopter);
    }

    async list(): Promise<Adopter[]> {
        return await this.repository.find();
    }

    async find(id: number): Promise<Adopter> {
        return await this.repository.findOne({ where: { id } }) as Adopter;
    }

    async update(id: number, adopter: Adopter) {
        const adopterToUpdate = await this.repository.findOne({ where: { id } });

        if (!adopterToUpdate) {
            throw new NotFound("Adopter not found.");
        }

        Object.assign(adopterToUpdate, adopter);

        await this.repository.save(adopterToUpdate);

        return { success: true, message: "Adopter updated" };
    }
    async delete(id: number) {
        const adopterToRemove = await this.repository.findOne({ where: { id } });

        if (!adopterToRemove) {
            throw new NotFound("Adopter not found.");
        }

        await this.repository.remove(adopterToRemove);

        return { success: true, message: "Adopter deleted sucessfully" };
    }

    async updateAddress(id: number, address: Address) {
        const adopterToUpdate = await this.repository.findOne({ where: { id } });

        if (!adopterToUpdate) {
            throw new NotFound("Adopter not found.");
        }

        adopterToUpdate.address = address;

        await this.repository.save(adopterToUpdate);

        return { success: true, message: "Adopter updated" };
    }



}