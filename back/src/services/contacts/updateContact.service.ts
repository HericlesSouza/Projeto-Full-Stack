
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { TReturnContact, TUpdateContact } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";
import { returnContactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (contactData: TUpdateContact, idContact: number, loggedUser: number): Promise<TReturnContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOne({
        relations: {
            client: true
        },
        where: {
            id: idContact
        }
    })

    if (contact?.client.id !== loggedUser) {
        throw new AppError("Contact not found", 403);
    }

    const newContact = contactRepository.create({
        ...contact,
        ...contactData
    })

    await contactRepository.save(newContact)

    return returnContactSchema.parse(newContact)
}