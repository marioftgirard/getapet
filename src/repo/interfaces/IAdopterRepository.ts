// InterfaceAdotanteRepository.ts

import Address from "../../entities/Address";
import Adopter from "../../entities/Adopter";


export default interface IAdopterRepository {
    create(adopter: Adopter): void | Promise<void>;
    list(): Array<Adopter> | Promise<Adopter[]>;
    find(id: number): Adopter | Promise<Adopter>;
    update(id: number, pet: Adopter): void;
    delete(id: number): void;
    updateAddress(id: number, address: Address): void;
}