import Pet from "../../entities/Pet";
import EnumSizes from "../../enum/enumSizes";

export default interface InterfacePetRepository {
    create(pet: Pet): void;
    list(): Array<Pet> | Promise<Pet[]>;
    find(id: number): Pet | Promise<Pet>;
    update(id: number, pet: Pet): void;
    delete(id: number): void;
    getAdopted(petId: number, adopterId: number): | void;
    bindHaven(petId: number, havenId: number): | void;
    findPetsBySize(size: EnumSizes): Array<Pet> | Promise<Pet[]>;
    findPeyByAnyfield<Tipo extends keyof Pet>(campo: Tipo, value: Pet[Tipo]): Promise<Pet[]> | Pet[];
}