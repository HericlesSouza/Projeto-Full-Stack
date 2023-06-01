import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { AppError } from "../../error"
import { TReturnContact } from "../../interfaces/contacts.interface"
import { returnContactSchema } from "../../schemas/contact.schema"

export const listSpecificContactService = async (idContact: number, loggedUser: number): Promise<TReturnContact> => {
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

    return returnContactSchema.parse(contact)
}