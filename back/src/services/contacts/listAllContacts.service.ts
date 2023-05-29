import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { TAllContact } from "../../interfaces/contacts.interface";
import { returnAllContactSchema } from "../../schemas/contact.schema";

export const listAllContactsService = async (loggedClient: number): Promise<TAllContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
 
    const contacts = await contactRepository.findBy({
        client: { id: loggedClient}
    });

    return returnAllContactSchema.parse(contacts)
}