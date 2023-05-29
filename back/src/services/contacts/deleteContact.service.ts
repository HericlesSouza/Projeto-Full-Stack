import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { AppError } from "../../error"

export const deleteContactService = async (idContact: number, loggedUser: number): Promise<void> => {
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

    await contactRepository.remove(contact!)
}