import { Request, Response } from "express";
import HavenRepository from "../repo/HavenRepository";
import Haven from "../entities/Haven";
import Address from "../entities/Address";
import { HavenReqBody, HavenReqParams, HavenResBody } from "../types/havenTypes";

let havenRepository: HavenRepository = new HavenRepository();


export default class HavenController {


    async createHaven(req: Request<{}, {}, HavenReqBody>, res: Response<HavenResBody>) {

        const { name, email, phone, password, address } = req.body;        
        

        const newHaven = new Haven(
            name, email, phone, password, address
        );

        await havenRepository.create(newHaven);
        return res.status(201).json({ data: { id: newHaven.id, name, email,phone,address } });

    }


    async listHavens(req: Request<{}, {}, HavenReqBody>, res: Response<HavenResBody>) {
        const havenList = await havenRepository.list();
        const data = havenList.map((haven) => {
            return {
                id: haven.id,
                name: haven.name,
                email: haven.email,
                phone: haven.phone,
                address: haven.address !== null?haven.address:undefined
            }
        });
        return res.status(200).json({ data: data });
    }

    async findHaven(req: Request<HavenReqParams, {}, HavenReqBody>, res: Response<HavenResBody>) {
        const { id } = req.params;
        let haven = await havenRepository.find(Number(id));
        return res.status(200).json({ data: { id: haven.id, name: haven.name, phone: haven.phone, email: haven.email}});
    }

    async updateHaven(req: Request<HavenReqParams, {}, HavenReqBody>, res: Response) {
        const { id } = req.params;
        const { success, message } = await havenRepository.update(
            Number(id),
            req.body as Haven
        );
        return res.status(200).json(message);
    }

    async deleteHaven(req: Request<HavenReqParams, {}, HavenReqBody>, res: Response) {
        const { id } = req.params;
        const { success, message } = await havenRepository.delete(
            Number(id));
        return res.status(200).json({ data: message });
    }

    async updateAddress(req: Request<HavenReqParams, {}, Address>, res: Response) {

        const { id } = req.params;       

        const data = await havenRepository.updateAddress(Number(id), req.body);

        return res.status(201).json({ data: data.message });


    }



}