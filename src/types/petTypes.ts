import Address from "../entities/Address";
import Pet from "../entities/Pet";


type PetReqBody = Omit<Pet, "id">;

type PetReqParams = { id: string };

type PetResBody = {
    data?: Pick<Pet, "id" | "name" | "specie" | "size"> |
    Pick<Pet, "id" | "name" | "specie" | "size">[]
};

export { PetReqBody, PetResBody, PetReqParams };