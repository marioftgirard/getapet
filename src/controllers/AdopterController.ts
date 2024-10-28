import { Request, Response } from "express";
import AdopterRepository from "../repo/AdopterRepository";
import Adopter from "../entities/Adopter";
import Address from "../entities/Address";
import { AdopterReqBody, AdopterReqParams, AdopterResBody } from "../types/adopterTypes";

let adopterRepository: AdopterRepository = new AdopterRepository();


export default class AdopterController {


    async createAdopter(req: Request<{}, {}, AdopterReqBody>, res: Response<AdopterResBody>) {

        const { name, password, phone, photo, address } = <Adopter>req.body;        
        

        const newAdopter = new Adopter(
            name, password, phone, photo, address
        );

        await adopterRepository.create(newAdopter);
        return res.status(201).json({ data: { id: newAdopter.id, name, phone,address } });

    }


    async listAdopters(eq: Request<{}, {}, AdopterReqBody>, res: Response<AdopterResBody>) {
        const adopterList = await adopterRepository.list();
        const data = adopterList.map((adopter) => {
            return {
                id: adopter.id,
                name: adopter.name,
                phone: adopter.phone,
                address: adopter.address !== null?adopter.address:undefined
            }
        });
        return res.status(200).json({ data: data });
    }

    async findAdopter(req: Request<AdopterReqParams, {}, AdopterReqBody>, res: Response<AdopterResBody>) {
        const { id } = req.params;
        let adopter = await adopterRepository.find(Number(id));
        return res.status(200).json({ data: { id: adopter.id, name: adopter.name, phone: adopter.phone } });
    }

    async updateAdopter(req: Request<AdopterReqParams, {}, AdopterReqBody>, res: Response) {
        const { id } = req.params;
        const { success, message } = await adopterRepository.update(
            Number(id),
            req.body as Adopter
        );
        return res.status(200).json(message);
    }

    async deleteAdopter(req: Request<AdopterReqParams, {}, AdopterReqBody>, res: Response) {
        const { id } = req.params;
        const { success, message } = await adopterRepository.delete(
            Number(id));
        return res.status(200).json({ data: message });
    }

    async updateAddress(req: Request<AdopterReqParams, {}, Address>, res: Response) {

        const { id } = req.params;       

        const data = await adopterRepository.updateAddress(Number(id), req.body);

        return res.status(201).json({ data: data.message });


    }



}