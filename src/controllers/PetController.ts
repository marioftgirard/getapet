import { Request, Response } from "express";
import EnumSpecies from "../enum/enumSpecies";
import EnumSizes from "../enum/enumSizes";
import PetRepository from "../repo/PetRepository";
import Pet from "../entities/Pet";
import { PetReqBody, PetResBody } from "../types/petTypes";


let petRepository: PetRepository = new PetRepository();


export default class PetController {


    async petCreate(req: Request<{}, {}, PetReqBody>, res: Response<PetResBody>) {

        const { name, specie, bornDate, adopted, size } = req.body;
        const newPet: Pet = new Pet(name, specie, bornDate, adopted, size as EnumSizes);

        await petRepository.create(newPet);

        return res.status(201).json(
            {
                data: {
                    id: newPet.id,
                    name: newPet.name,
                    specie: newPet.specie,
                    size: newPet.size
                }
            });

    }


    async listPets(req: Request, res: Response) {
        const petList = await petRepository.list();
        const pets = petList.map((pet) => {
            return {
                id: pet.id,
                name: pet.name,
                specie: pet.specie,
                size: pet.size !== null ? pet.size : undefined
            };
        });

        return res.status(200).json(petList);
    }

    async findPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = await petRepository.find(Number(id));

        return res.status(200).json(pet);
    }



    async updatePet(req: Request, res: Response) {
        const { id } = req.params;
        const size = req.body.size;
        const specie = req.body.specie;
        const { success, message } = await petRepository.update(
            Number(id),
            req.body as Pet
        );

        return res.status(200).json(message);
    }

    async deletePet(req: Request, res: Response) {
        const { id } = req.params;
        const { success, message } = await petRepository.delete(
            Number(id));

        return res.status(200).json(message);
    }

    async getAdopted(req: Request, res: Response) {
        const { petId, adopterId } = req.params;
        const { success, message } = await petRepository.getAdopted(
            Number(petId),
            Number(adopterId)
        );

        return res.status(200).json({ success, message });
    }

    async bindHAven(req: Request, res: Response) {
        const { petId, havenId } = req.params;
        const { success, message } = await petRepository.bindHaven(
            Number(petId),
            Number(havenId)
        );

        return res.status(200).json({ success, message });
    }

    async findPetsBySize(req: Request, res: Response) {

        const size = req.query.size;
        const pets = await petRepository.findPetsBySize(size as EnumSizes);

        return res.status(200).json(pets);
    }

    async findPeyByAnyfield(req: Request, res: Response) {

        const { field, value } = req.query;
        const pets = await petRepository.findPeyByAnyfield(field as keyof Pet, value as string);

        return res.status(200).json(pets);
    }




}