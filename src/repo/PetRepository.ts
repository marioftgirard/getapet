import { AnyError, Repository } from "typeorm";
import Pet from "../entities/Pet";
import InterfacePetRepository from "./interfaces/IPetRepository";
import { APPDS } from "../config/dataSource";
import Adopter from "../entities/Adopter";
import AdopterRepository from "./AdopterRepository";
import EnumSizes from "../enum/enumSizes";
import { NotFound } from "../utils/ErrorHandlers";
import Haven from "../entities/Haven";
import HavenRepository from "./HavenRepository";

export default class PetRepository implements InterfacePetRepository {

    private repository: Repository<Pet>;

    constructor() {
        this.repository = APPDS.getRepository("Pet");
    }

    async create(pet: Pet): Promise<void> {
        await this.repository.save(pet);
    }

    async find(id: number): Promise<Pet> {
        const pet = await this.repository.findOne({ where: { id } }) as Pet;
        if (!pet)
            throw new NotFound("Pet not found");
        return pet;
    }

    async list(): Promise<Pet[]> {
        return await this.repository.find();
    }

    async update(id: number, pet: Pet) {

        const petToUpdate = await this.repository.findOne({ where: { id } });

        if (!petToUpdate) {
            throw new NotFound("Pet not found");
        }

        Object.assign(petToUpdate, pet);

        await this.repository.save(petToUpdate);

        return { success: true, message: "Pet updated" };
    }

    async delete(id: number) {
        const petToRemove = await this.repository.findOne({ where: { id } });

        if (!petToRemove) {
            throw new NotFound("Pet not found");
        }

        await this.repository.remove(petToRemove);

        return { success: true, message: "Pet deleted sucessfully" };
    }

    async getAdopted(petId: number, adopterId: number) {
        const pet: Pet = await this.find(petId);

        if (!pet)
            throw new NotFound("Pet not found");

        const adopter: Adopter = await new AdopterRepository().find(adopterId);

        if (!adopter)
            throw new NotFound("Adopter not found");

        pet.adopter = adopter;
        pet.adopted = true;
        pet.haven = null;

        await this.repository.save(pet);

        return { success: true, message: "Pet(" + pet.name + ") has been adopted by " + pet.adopter.name };

    }

    async bindHaven(petId: number, havenId: number) {
        const pet: Pet = await this.find(petId);

        if (!pet)
            throw new NotFound("Pet not found");

        const haven: Haven = await new HavenRepository().find(havenId);

        if (!haven)
            throw new NotFound("Adopter not found");

        pet.haven = haven;
        pet.adopter = null;
        pet.adopted = false;        

        await this.repository.save(pet);

        return { success: true, message: "Pet(" + pet.name + ") has been placed in " + pet.haven.name };

    }

    async findPetsBySize(size: EnumSizes): Promise<Pet[]> {

        return await this.repository.find({ where: { size: size } });;
    }

    async findPeyByAnyfield<Tipo extends keyof Pet>(campo: Tipo, value: Pet[Tipo]): Promise<Pet[]> {
        return this.repository.find({ where: { [campo]: value } });
    }

}