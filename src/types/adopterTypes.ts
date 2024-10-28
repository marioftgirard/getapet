import Address from "../entities/Address";
import Adopter from "../entities/Adopter";


type AdopterReqBody = Omit<Adopter, "id" | "pets">;

type AdopterReqParams = { id: string };

type AdopterResBody = {
    data?: Pick<Adopter, "id" | "name" | "phone" | "address"> |
    Pick<Adopter, "id" | "name" | "phone" | "address">[] | Address
};

export { AdopterReqBody, AdopterResBody, AdopterReqParams };