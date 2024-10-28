import { AnyError, Repository } from "typeorm";
import { APPDS } from "../config/dataSource";
import IHavenRepository from "./interfaces/IHavenRepository";
import Haven from "../entities/Haven";
import Address from "../entities/Address";
import { BadRequest, NotFound } from "../utils/ErrorHandlers";

export default class HavenRepository implements IHavenRepository {


    private repository: Repository<Haven>;

    private async checkPhone(phone: string) {
        return await this.repository.findOne({ where: { phone } });
    }

    private async checkEmail(phone: string) {
        return await this.repository.findOne({ where: { phone } });
    }

    constructor() {
        this.repository = APPDS.getRepository("Haven");
    }

    async create(haven: Haven) {

        if (await this.checkPhone(haven.phone)) {
            throw new BadRequest("Phone is alrealdy in use");
        }

        if (await this.checkEmail(haven.email)) {
            throw new BadRequest("Email is alrealdy in use");
        }

        await this.repository.save(haven);
    }

    async list(): Promise<Haven[]> {
        return await this.repository.find();
    }

    async find(id: number): Promise<Haven> {
        return await this.repository.findOne({ where: { id } }) as Haven;
    }

    async update(id: number, haven: Haven) {
        const havenToUpdate = await this.repository.findOne({ where: { id } });

        if (!havenToUpdate) {
            throw new NotFound("Haven not found.");
        }

        Object.assign(havenToUpdate, haven);

        await this.repository.save(havenToUpdate);

        return { success: true, message: "Haven updated" };
    }
    async delete(id: number) {
        const havenToRemove = await this.repository.findOne({ where: { id } });

        if (!havenToRemove) {
            throw new NotFound("Haven not found.");
        }

        await this.repository.remove(havenToRemove);

        return { success: true, message: "Haven deleted sucessfully" };
    }

    async updateAddress(id: number, address: Address) {
        const havenToUpdate = await this.repository.findOne({ where: { id } });

        if (!havenToUpdate) {
            throw new NotFound("Haven not found.");
        }

        havenToUpdate.address = address;

        await this.repository.save(havenToUpdate);

        return { success: true, message: "Haven updated" };
    }



}