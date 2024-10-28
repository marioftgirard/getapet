// InterfaceAdotanteRepository.ts

import Address from "../../entities/Address";
import Haven from "../../entities/Haven";


export default interface IHavenRepository {
    create(adopter: Haven): void | Promise<void>;
    list(): Array<Haven> | Promise<Haven[]>;
    find(id: number): Haven | Promise<Haven>;
    update(id: number, pet: Haven): void;
    delete(id: number): void;
    updateAddress(id: number, address: Address): void;
}