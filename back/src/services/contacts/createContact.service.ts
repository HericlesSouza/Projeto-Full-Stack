import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contacts.entity";
import { TCreateContact, TReturnContact } from "../../interfaces/contacts.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

export const createContactService = async (contactData: TCreateContact, loggedClient: number): Promise<TReturnContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({ id: loggedClient })

    const newContactData = {
        ...contactData,
        client: client!
    }

    const newContact = contactRepository.create(newContactData)

    await contactRepository.save(newContact)

    return returnContactSchema.parse(newContact)
}