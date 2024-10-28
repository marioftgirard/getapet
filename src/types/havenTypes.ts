import Address from "../entities/Address";
import Haven from "../entities/Haven";


type HavenReqBody = Omit<Haven, "id" | "pets">;

type HavenReqParams = { id: string };

type HavenResBody = {
    data?: | Pick<Haven, "id" | "name" | "email" | "phone" | "address"> |
    Pick<Haven, "id" | "name" | "email" | "phone" | "address">[] 
};

export { HavenReqBody, HavenResBody, HavenReqParams };